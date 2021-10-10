import { ref, onMounted } from "vue";
import {
    getComplaints
} from "../services/near";

export const useComplaints = () => {
    const complaints = ref([]);
    const  err = ref(null)
    onMounted(async () => {
      try {
        complaints.value  = await getComplaints()
      } catch (e) {
        err.value = e;
        console.log(err.value);
      }
    });
  
    // const handleAddMeme = async ({ meme, title, data, category }) => {
    //   addMeme({ meme, title, data, category });
    // };
  
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
        complaints
    };
  };