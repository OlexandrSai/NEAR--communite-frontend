import {Component, OnInit} from '@angular/core';
import {ComplaintService} from "../../services/complaint.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public search = '';
  public complaints: any[] = [];
  public searchableColumns = ['title', 'description', 'location'];
  constructor(public complaintService: ComplaintService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    try {
      this.complaintService.complaints = await this.complaintService.nearService.getComplaints()
      this.complaintService.votes = await this.complaintService.nearService.alreadyVoted(this.complaintService.nearService.accountId);
      this.complaints = this.complaintService.complaints;
    } catch (e) {
      this.complaintService.err = e;
    }
  }

  async searchChange() {
    this.complaints = this.complaintService.complaints;

    if (this.complaints && this.search !== '') {
      let highlightData = this.complaints.map((complaint) => {
        const highlightText: any = {};
        this.searchableColumns.map((keyColumn) => {
          highlightText[keyColumn] = complaint?.[keyColumn].replace(
            new RegExp(
              this.search.replace(/[*[&<$.|^>\\/\]"?()+]/g, (s) => {
                return '\\' + s;
              }),
              'gi'
            ),
            (str: any) => {
              return str ? `${'<mark>' + str + '</mark>'}` : str;
            }
          );
        });
        return {...complaint, ...highlightText};
      });

      if (this.search) {
        highlightData = highlightData.filter((message, id) =>
          this.searchableColumns.some((keyColumn) => message[keyColumn] !== this.complaints[id][keyColumn])
        );
      }

      this.complaints = highlightData;
    }
  }
}
