import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {keyStores, Near, utils, WalletConnection} from "near-api-js";
import {Router} from "@angular/router";

// @ts-ignore
import BN from "bn.js";


@Injectable({
  providedIn: 'root'
})
export class NearService {
  public accountId = '';
  public CONTRACT_ID = environment.NG_APP_CONTRACT_ID;
  public gas = new BN(environment.NG_APP_gas);
  public near = new Near({
    networkId: environment.NG_APP_networkId,
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: environment.NG_APP_nodeUrl,
    walletUrl: environment.NG_APP_walletUrl,
    headers: {}
  });
  public wallet = new WalletConnection(this.near, "communite");

  constructor(private router: Router) {
    this.accountId = this.wallet.getAccountId();
  }

  async handleSignIn() {
    await this.wallet.requestSignIn({
      contractId: this.CONTRACT_ID,
      methodNames: [] // add methods names to restrict access
    })
  };

  handleSignOut() {
    this.wallet.signOut()
    this.accountId = ''
    this.router.navigate(['']);
  };

  async getComplaints() {
    return await this.wallet.account().viewFunction(this.CONTRACT_ID, "getComplaints")
  }

  alreadyVoted(userId: any) {
    return this.wallet.account().viewFunction(this.CONTRACT_ID, "hasAlreadyVoted", {accountId: userId})
  }

//function to add new complaint
  addNewComplaint({
                    title,
                    description,
                    category,
                    location
                  }: { title: any, description: any, category: any, location: any }) {
    return this.wallet.account().functionCall({
      contractId: this.CONTRACT_ID,
      methodName: "addNewComplaint",
      gas: this.gas,
      args: {title, description, category, location}
    });
  }

//function to vote
  voteComplaint(id: any) {
    return this.wallet.account().functionCall({
      contractId: this.CONTRACT_ID,
      methodName: "voteComplaint",
      args: {id: id}
    });
  }

//function to remove vote
  removeVote(id: any) {
    return this.wallet.account().functionCall({
      contractId: this.CONTRACT_ID,
      methodName: "removeVote",
      args: {id: id}
    });
  }

// export const voteComplaint = ({id}) => {
//   console.log(id)
//   return wallet.account().functionCall({
//       contractId: CONTRACT_ID,
//       methodName: "voteComplaint",
//       gas,
//       args: {id}
//   })
// }

// export const removeVote = ({id}) => {
//   console.log(id)
//   return wallet.account().functionCall({
//       contractId: CONTRACT_ID,
//       methodName: "removeVote",
//       gas,
//       args: {id}
//   })
// }

// export const takeComplaint = ({id}) => {
//   console.log(id)
//   return wallet.account().functionCall({
//       contractId: CONTRACT_ID,
//       methodName: "takeComplaint",
//       gas,
//       args: {id}
//   })
// }

// export const finishComplaint = ({id}) => {
//   console.log(id)
//   return wallet.account().functionCall({
//       contractId: CONTRACT_ID,
//       methodName: "finishComplaint",
//       gas,
//       args: {id}
//   })
// }
}
