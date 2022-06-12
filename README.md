#  🎓 NCD.L2.sample--communite dApp
This repository contains a complete frontend applications (Vue.js, React) to work with
<a href="https://github.com/Learn-NEAR/NCD.L1.sample--Communite" target="_blank">NCD.L1.sample--Communite smart contract</a> targeting the NEAR platform:
1. Vue.Js (main branch)
2. React (react branch)
2. Angular (angular branch)

The goal of this repository is to make it as easy as possible to get started writing frontend with Vue.js, React and Angular for AssemblyScript contracts built to work with NEAR Protocol.


## ⚠️ Warning
Any content produced by NEAR, or developer resources that NEAR provides, are for educational and inspiration purposes only. NEAR does not encourage, induce or sanction the deployment of any such applications in violation of applicable laws or regulations.


## ⚡  Usage
![image](https://user-images.githubusercontent.com/15414351/173212573-036dc38e-1112-42e3-ae05-1abd7ec2e563.png)
<a href="" target="_blank">UI walkthrough</a>

You can use this app with contract ids which were deployed by the creators of this repo or you can use it with your own deployed contract ids.

## Project setup
To deploy sample--communite to your account visit <a href="https://github.com/Learn-NEAR/NCD.L1.sample--Communite" target="_blank">this repo (smart contract deployment instructions are inside):</a>


```
CONTRACT_ID = "put your thanks contract id here"
...
```

After you fill up environment.ts file, you need to:

1. Install Angular CLI (if previously you didn't)
```
npm i -g @angular/cli
```

2. Install all dependencies
```
npm i
```
3. Run the project locally
```
npm run serve
```

Other commands:

Compiles and minifies for production
```
npm run build
```
Lints and fixes files
```
npm run lint
```

## 👀 Code walkthrough for Near university students

<a href="" >Code walk-through video | TBA |</a>

### -- Contract's --

To work with museum, and meme contracts we have separate functions inside ``` src/app/services/near.service.ts```.
```
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
```

### -- Near Service --

We are using ```near-api-js``` to work with NEAR blockchain. In ``` src/app/services/near.service.ts ``` we are importing classes, functions and configs which we are going to use:
```
import { keyStores, Near, Contract, utils, WalletConnection } from "near-api-js";
```

Class contains two variables
```
public near: Near;
public wallet: WalletConnection;
```

Then in ``` constructor() ``` we are connecting to NEAR:
```
this.near = new Near({
  networkId: environment.NETWORK_ID,
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: environment.NODE_URL,
  walletUrl: environment.WALLET_URL,
  headers: {}
});
``` 
and creating wallet connection
```
// create wallet connection
this.wallet = new WalletConnection(this.near, "communite");
```


### -- Complaint Service --

``` src/app/services/complaint.service.ts ``` represent the main functional class of dApp

We use that container to encapsulate all data and function's related to Museum and Complaint's:
```
  public complaints: any[] = [];
  public votes: any[] = [];
  ...
  
  handleAddNewComplaint(meme: any) {...};
  handleVoteForComplaint() {...};
```

With dependency injection we are able to share everything with components. ``` src/app/components/dashboard/dashboard.component.ts ``` as an example :
```
  constructor(public complaintService: ComplaintService) {
  }

  async loadData() {
    try {
      this.complaintService.complaints = await this.complaintService.nearService.getComplaints();
      this.complaintService.votes = await this.complaintService.nearService.alreadyVoted(this.complaintService.nearService.accountId);
      this.complaints = this.complaintService.complaints;
    } catch (e) {
      this.complaintService.err = e;
    }
  }
```

## Examples
``` src/app/services/near.service.ts ```
### - Function | No Parameters -
```
// get all 
async getComplaints() {...}
```

### - Function | With Parameters -
```
// add new complaint
async addNewComplaint({ title, description, category, location }:
                          { title: any, description: any, category: any, location: any }) {...}
```
