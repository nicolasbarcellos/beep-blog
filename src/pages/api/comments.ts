import { gql } from "graphql-request";
import { NextApiRequest, NextApiResponse } from "next";
import client from "../../services/client";

// export a default function for API route to work
export default async function asynchandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  try {
    const result = await client.request(query, req.body);

    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
}
