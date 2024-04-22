import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

// import { atom, useRecoilState } from "recoil";

// const catListState = atom({
//   key: "catListState",
//   default: [],
// });

interface CatsInterface {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: [];
  categories: [];
}

const CatViewerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CatViewerListContainer = styled.div`
  max-width: 1200px;
  border: 1px solid black;
`;

const CatVieweImage = styled.img`
  width: 100%;
  /* padding: 16px; */
`;

const Loading = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

const HorizontalFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 16px;
`;
const VerticalFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

function CatViewer() {
  const { ref, inView } = useInView();

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
      // console.log(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const fetchTodos = async ({ pageParam }: { pageParam: number }) => {
    const res = await axios.get("https://api.thecatapi.com/v1/images/search", {
      params: { limit: 30, page: pageParam },
      headers: {
        "x-api-key":
          "live_k77YJ1Sa3RsUfqEwbuKzrsevPSBW7iCoeeTZKSuj0ahl51TyYwbMXoLhVwwyIIvF",
      },
    });
    return res.data;
  };

  const {
    data,
    // status,
    // error,
    // hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isError,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["getCats"],
    queryFn: fetchTodos,
    initialPageParam: 1,
    getNextPageParam: (allPages) => {
      return allPages.length + 1;
    },
  });

  const getItemInColumn = useCallback(() => {
    let colCount = 1;
    if (innerWidth <= 700) {
      colCount = 1;
    } else if (innerWidth > 700 && innerWidth <= 1000) {
      colCount = 2;
    } else {
      colCount = 3;
    }
    let colGrids = new Array(colCount); // [0: [{},{},], 1: [{}, {}]],
    for (let i = 0; data && i < data?.pageParams.length; i++) {
      for (let j = 0; j < data.pages[i].length; j++) {
        if (colCount < 2) {
          console.log("just one column!");
          if (!colGrids[0]) {
            colGrids[0] = [];
          }
          colGrids[0].push(data.pages[i][j]);
        } else {
          const colIndex = j % colCount;

          if (!colGrids[colIndex]) {
            colGrids[colIndex] = [];
          }
          colGrids[colIndex].push(data.pages[i][j]);
        }
      }
    }
    return colGrids;
  }, [data, innerWidth]);

  useEffect(() => {
    if (data && data.pages.length > 1 && inView) {
      // console.log("in view!!");
      fetchNextPage();
    }
  }, [data, fetchNextPage, inView]);

  if (isLoading) return <Loading>Loading...</Loading>;

  if (isError) return <div>Error...</div>;

  return (
    <CatViewerContainer>
      <CatViewerListContainer>
        <HorizontalFlex>
          {getItemInColumn().map((item, idx) => {
            return (
              <VerticalFlex className={`column${idx}`}>
                {/* {item[0].url} */}
                {item.map((cat: CatsInterface) => {
                  return <CatVieweImage src={cat.url} alt="this is cat" />;
                })}
              </VerticalFlex>
            );
          })}
        </HorizontalFlex>
        {isFetchingNextPage && <Loading>Loading...</Loading>}
        <div ref={ref} />
      </CatViewerListContainer>
    </CatViewerContainer>
  );
}

export default CatViewer;
