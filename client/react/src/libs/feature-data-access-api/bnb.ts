import { useQuery } from "@tanstack/react-query";
import { BnbsSearchType } from "../utils/types";
import { client } from "./utils";

async function getBnbs(bnbsList?: BnbsSearchType) {
  let query = "bnb/list?";
  if (bnbsList) {
    const { min_cost, max_cost, min_space, max_space, address_like } = bnbsList;
    if (min_cost) query += `&min_cost=${min_cost}`;
    if (max_cost) query += `&max_cost=${max_cost}`;
    if (min_space) query += `&min_space=${min_space}`;
    if (max_space) query += `&max_space=${max_space}`;
    if (address_like) query += `&address_like=${address_like}`;
  }

  return client(query);
}
export function useBnbs(bnbsList?: BnbsSearchType) {
  return useQuery({
    queryKey: ["bnbs", bnbsList],
    queryFn: () => getBnbs(bnbsList),
  });
}
