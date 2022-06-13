import { Injectable } from '@angular/core';
import { NearService } from "./near.service";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  public complaints: any[] = [];
  public votes: any[] = [];
  public err: any = null;
  public isLoading: boolean = false;

  constructor(public nearService: NearService, private toastr: ToastrService) {
  }

  async handleAddNewComplaint({ title, description, category, location }:
                                { title: any, description: any, category: any, location: any }) {
    this.isLoading = true;
    await this.nearService.addNewComplaint({ title, description, category, location });
    this.isLoading = false;
  };

  async handleVoteForComplaint(id: any) {
    this.isLoading = true;
    const idToInt = parseInt(id)
    await this.nearService.voteComplaint(idToInt);
    this.complaints = await this.nearService.getComplaints()
    this.votes = await this.nearService.alreadyVoted(this.nearService.accountId);
    this.toastr.success('You voted');
    this.isLoading = false;
  };

  async handleRemoveVoteForComplaint(id: any) {
    this.isLoading = true;

    if (this.complaints[id].ticketOwner === this.nearService.accountId + id) {
      this.toastr.error('Sorry, the ticker owner cant unvote');
      this.isLoading = false;
      return;
    }

    const idToInt = parseInt(id)
    await this.nearService.removeVote(idToInt);
    this.complaints = await this.nearService.getComplaints();
    this.votes = await this.nearService.alreadyVoted(this.nearService.accountId);
    this.toastr.success('Your vote removed');
    this.isLoading = false;
  };
}
