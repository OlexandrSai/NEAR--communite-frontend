import { keyStores, Near, WalletConnection } from "near-api-js";
//utils
import BN from "bn.js";

export const CONTRACT_ID = "dev-1633929351317-74031669875234";
const gas = new BN("70000000000000");

export const near = new Near({
    networkId: "testnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
  });

export const wallet = new WalletConnection(near, "communite");

export const getComplaints = () => {
  return wallet.account().viewFunction(CONTRACT_ID, "getComplaints")
}

export const alreadyVoted = (userId) => {
  return wallet.account().viewFunction(CONTRACT_ID, "hasAlreadyVoted", {accountId:userId})
}

//function to add new complaint
export const addNewComplaint = ({title, description, category, location}) => {
  return wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: "addNewComplaint",
    gas,
    args: {title, description, category, location}
});
}

//function to vote
export const voteComplaint = (id) => {
  return wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: "voteComplaint",
    args: {id:id}
});
}

//function to remove vote
export const removeVote = (id) => {
  return wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: "removeVote",
    args: {id:id}
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