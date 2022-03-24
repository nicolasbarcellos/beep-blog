import axios from "axios";
import { CommentData } from "../types";

export const submitComment = async (obj: CommentData) => {
  const payload = obj;
  const result = await axios({
    method: "post",
    url: `${process.env.NEXT_PUBLIC_URL + "/api/comments"}`,
    data: payload,
    headers: {
      Authorization: "Bearer " + process.env.GRAPHQL_TOKEN,
    },
  });
  return result;
};
