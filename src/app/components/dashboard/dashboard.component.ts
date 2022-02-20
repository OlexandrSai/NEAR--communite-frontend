import { Component, OnInit } from '@angular/core';
import {ComplaintService} from "../../services/complaint.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public complaintService: ComplaintService) { }

  ngOnInit(): void {

  }

  async loadData() {
      try {
  this.complaintService.complaints  = await this.complaintService.nearService.getComplaints()
  this.complaintService.votes = await this.complaintService.nearService.alreadyVoted(this.complaintService.nearService.accountId);
} catch (e) {
  this.complaintService.err = e;
}

  }
}
