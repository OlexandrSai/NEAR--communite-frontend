import { keyStores, Near, WalletConnection, utils } from "near-api-js";
import BN from "bn.js";

export const CONTRACT_ID = "dev-1631284937046-18202365708707";
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

// will return the metadata of the complaints
export const getNComplaints = () => {
  return wallet.account().viewFunction(CONTRACT_ID, "getNComplaints")
}

// returns the amount of tickets that i've issued
export const getNumberOfComplaints = () => {
  return wallet.account().viewFunction(CONTRACT_ID, "getNumberOfComplaints")
}



//function to sendMessage
export const addNewComplaint = ({title, description, category, location}) => {
  console.log(title, description, category, location)
  return wallet.account().functionCall({
      contractId: CONTRACT_ID,
      methodName: "addNewComplaint",
      gas,
      args: {title, description, category, location}
  })
}

export const voteComplaint = ({id}) => {
  console.log(id)
  return wallet.account().functionCall({
      contractId: CONTRACT_ID,
      methodName: "voteComplaint",
      gas,
      args: {id}
  })
}

export const removeVote = ({id}) => {
  console.log(id)
  return wallet.account().functionCall({
      contractId: CONTRACT_ID,
      methodName: "removeVote",
      gas,
      args: {id}
  })
}

export const takeComplaint = ({id}) => {
  console.log(id)
  return wallet.account().functionCall({
      contractId: CONTRACT_ID,
      methodName: "takeComplaint",
      gas,
      args: {id}
  })
}

export const finishComplaint = ({id}) => {
  console.log(id)
  return wallet.account().functionCall({
      contractId: CONTRACT_ID,
      methodName: "finishComplaint",
      gas,
      args: {id}
  })
}