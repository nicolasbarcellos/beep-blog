import axios from "axios";
import { CommentData } from "../types";

export const submitComment = async (obj: CommentData) => {
  const payload = obj;
  const result = await axios.post(
    `https://beep-blog.vercel.app/api/comments`,
    payload
  );
  return result;
};

