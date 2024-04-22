import axios from "axios";
import { CAT_API_KEY, CAT_API_LIMIT, CAT_API_URL } from "./config";

const fetchCats = async ({ pageParam }: { pageParam: number }) => {
  const res = await axios.get(CAT_API_URL, {
    params: { limit: CAT_API_LIMIT, page: pageParam },
    headers: {
      "x-api-key": CAT_API_KEY,
    },
  });
  return res.data;
};

export { fetchCats };
