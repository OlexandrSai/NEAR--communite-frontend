import { ref, onMounted } from "vue";
import {
    getComplaints,
    addNewComplaint,
    alreadyVoted
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
        console.log()
      } catch (e) {
        err.value = e;
        console.log(err.value);
      }
    });
  
    const handleAddNewComplaint = async ({ title, description, category, location}) => {
      return await addNewComplaint({ title, description, category, location });
    };
  
    // const handleAddComment = async ({ memeId, text }) => {
    //   await addComment({ memeId, text });
    // };
  
    // const handleDonate = async ({ memeId, amount }) => {
    //   await donate({ memeId, amount });
    // };
  
    // const handleVote = async ({ memeId, value }) => {
    //   await vote({ memeId, value });
    // };
  
    return {
        complaints,
        votes,
        addNewComplaint:handleAddNewComplaint
    };
  };