import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { Contract, keyStores, Near, WalletConnection } from "near-api-js";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class NearService {
  public accountId = '';
  public CONTRACT_ID = environment.CONTRACT_ID;
  public near: Near;
  public wallet: WalletConnection;
  public commContract: any;

  constructor(private router: Router) {
    // connecting to NEAR
    this.near = new Near({
      networkId: environment.NETWORK_ID,
      keyStore: new keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl: environment.NODE_URL,
      walletUrl: environment.WALLET_URL,
      headers: {}
    });

    // create wallet connection
    this.wallet = new WalletConnection(this.near, "communite");
    this.accountId = this.wallet.getAccountId();
    // get contracts
    this.commContract = this.getCommContract()
  }

  private getCommContract() {
    return new Contract(
      this.wallet.account(),
      environment.CONTRACT_ID,
      {
        viewMethods: ['getComplaints', 'hasAlreadyVoted'],
        changeMethods: ['addNewComplaint', 'voteComplaint', 'removeVote']
      }
    )
  }

  // get all
  async getComplaints() {
    return await this.commContract.getComplaints();
  }

  async alreadyVoted(userId: any) {
    return await this.commContract.hasAlreadyVoted({ accountId: userId })

  }

  // add new complaint
  async addNewComplaint({ title, description, category, location }:
                          { title: any, description: any, category: any, location: any }) {
    return await this.commContract.addNewComplaint({ title, description, category, location });
  }

  // vote
  async voteComplaint(id: any) {
    return this.commContract.voteComplaint({ id: id });
  }

  // remove vote
  async removeVote(id: any) {
    return await this.commContract.removeVote({ id: id });
  }

  async takeComplaint(id: any) {
    return await this.commContract.takeComplaint({ id: id });
  }

  async finishComplaint(id: any) {
    return await this.commContract.finishComplaint({ id: id });
  }

  async handleSignIn() {
    await this.wallet.requestSignIn({
      contractId: this.CONTRACT_ID,
      methodNames: []
    })
  };

  handleSignOut() {
    this.wallet.signOut()
    this.accountId = ''
    this.router.navigate(['']);
  };
}
