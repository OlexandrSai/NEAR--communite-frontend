import {Injectable} from '@angular/core';
import {NearService} from "./near.service";

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  public complaints = [];
  public votes = [];
  public err: any = null;

  constructor(public nearService: NearService) {
  }

  async handleAddNewComplaint({
                                title,
                                description,
                                category,
                                location
                              }: { title: any, description: any, category: any, location: any }) {
    return await this.nearService.addNewComplaint({title, description, category, location});
  };

  async handleVoteForComplaint(id: any) {
    const idToInt = parseInt(id)
    await this.nearService.voteComplaint(idToInt);
    this.complaints = await this.nearService.getComplaints()
  };

  async handleRemoveVoteForComplaint(id: any) {
    const idToInt = parseInt(id)
    await this.nearService.removeVote(idToInt);
    this.complaints = await this.nearService.getComplaints();
    this.votes = await this.nearService.alreadyVoted(this.nearService.accountId);
  };
}
