import axios from "axios";
import { CommentData } from "../types/commentData";

export const submitComment = async (obj: CommentData) => {
  const payload = obj;
  const result = await axios.post(`/api/comments`, payload);
  return result;
};
