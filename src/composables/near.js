import { ref, onMounted } from "vue";
import {
    getComplaints,
    addNewComplaint,
    alreadyVoted,
    voteComplaint,
    removeVote
} from "../services/near";
import store from '../store/store.js'

export const useComplaints = () => {
    const complaints = ref([]);
    const votes = ref([])
    const  err = ref(null)
    onMounted(async () => {
      try {
        complaints.value  = await getComplaints()
        votes.value = await alreadyVoted(store.state.accountId)
      } catch (e) {
        err.value = e;
        console.log(err.value);
      }
    });
  
    const handleAddNewComplaint = async ({ title, description, category, location}) => {
      return await addNewComplaint({ title, description, category, location });
    };

    const handleVoteForComplaint = async (id) => {
      const  idToInt = parseInt(id)
      await voteComplaint(idToInt).then(async function()  { 
        alert('here')
        complaints.value=await  getComplaints()
      });
    };

    const handleRemoveVoteForComplaint = async (id) => {
      const  idToInt = parseInt(id)
      await removeVote(idToInt).then(async function()  { 
        complaints.value=await  getComplaints()
      }).then(async function()  { 
        complaints.value=await alreadyVoted(store.state.accountId)
      })
    };
  
    return {
        complaints,
        votes,
        addNewComplaint:handleAddNewComplaint,
        voteForComplaint:handleVoteForComplaint,
        removeVoteForComplaint:handleRemoveVoteForComplaint
    };
  };