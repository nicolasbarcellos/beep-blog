import axios from "axios";
import { CommentData } from "../types";

export const submitComment = async (obj: CommentData) => {
  const payload = obj;
  const result = await axios.post(
    `${process.env.NEXT_PUBLIC_URL}/api/comments`,
    payload
  );
  return result;
};
