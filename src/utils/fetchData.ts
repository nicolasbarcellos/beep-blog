import client from "../services/client";

export async function fetchData(query: string, variable = {}) {
  return await client.request(query, variable)
}