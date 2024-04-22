import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface CatsInterface {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: object;
  favourite: object;
}

function CatViewer() {
  async function fetchCats() {
    return await axios
      .get("https://api.thecatapi.com/v1/images/search", {
        params: { limit: 30 },
        headers: {
          "x-api-key":
            "live_k77YJ1Sa3RsUfqEwbuKzrsevPSBW7iCoeeTZKSuj0ahl51TyYwbMXoLhVwwyIIvF",
        },
      })
      .then((res) => res.data);
  }

  const { data, isLoading, isError } = useQuery<CatsInterface[]>({
    queryKey: ["get-coin"],
    queryFn: fetchCats,
  });

  if (isLoading) return <div>loading...</div>;

  if (isError) return <div>Error...</div>;

  return (
    <div style={{ maxWidth: "1200px", border: "1px solid black" }}>
      {data?.map((d) => {
        return (
          // <img
          //   src={d.url}
          //   alt="this is cat"
          //   style={{
          //     width: "389px",
          //     border: "5px solid black",
          //     height: "100%",
          //   }}
          // />
          <div>{d.url}</div>
        );
      })}
    </div>
  );
}

export default CatViewer;
