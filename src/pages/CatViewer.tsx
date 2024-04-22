import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import * as S from "../styles/CatViewerStyle";
import { fetchCats } from "../api";
import { CatsInterface } from "../model";

// import { atom, useRecoilState } from "recoil";

// const catListState = atom({
//   key: "catListState",
//   default: [],
// });

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
    queryFn: fetchCats,
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
          // console.log("just one column!");
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
    if (data && data.pages.length > 0 && inView) {
      console.log("in view!!");
      fetchNextPage();
    }
  }, [data, fetchNextPage, inView]);

  if (isLoading) return <S.Loading>Loading...</S.Loading>;

  if (isError) return <div>Error...</div>;

  return (
    <S.CatViewerContainer>
      <S.CatViewerListContainer>
        <S.HorizontalFlex>
          {getItemInColumn().map((item, idx) => {
            return (
              <S.VerticalFlex className={`column${idx}`}>
                {/* {item[0].url} */}
                {item.map((cat: CatsInterface) => {
                  return <S.CatVieweImage src={cat.url} alt="this is cat" />;
                })}
              </S.VerticalFlex>
            );
          })}
        </S.HorizontalFlex>
        {isFetchingNextPage && <S.Loading>Loading...</S.Loading>}
        <div ref={ref} />
      </S.CatViewerListContainer>
    </S.CatViewerContainer>
  );
}

export default CatViewer;
