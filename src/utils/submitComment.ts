import axios from "axios";
import { CommentData } from "../types";

export const submitComment = async (obj: CommentData) => {
  const payload = obj;
  // const url = `${process.env.NEXT_PUBLIC_URL + "/api/comments"}`;
  // const result = await axios.post(
  //   url,
  //   { body: payload },
  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: process.env.GRAPHQL_TOKEN!,
  //     },
  //   }
  // );
  const result = ''
  return result;
};
