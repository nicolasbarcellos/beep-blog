import axios from "axios";
import { CommentData } from "../types";

export const submitComment = async (obj: CommentData) => {
  const url = "https://beep-blog.vercel.app/api/comments";
  const payload = obj;
  const result = await axios.post(url, payload);
  return result;
};
