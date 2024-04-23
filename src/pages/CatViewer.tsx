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
  const { ref, inView } = useInView({
    initialInView: true,
  });

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [expandedImageId, setExpandedImageId] = useState("");

  const { data, status, error, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["getCats"],
      queryFn: fetchCats,
      initialPageParam: 1,
      getNextPageParam: (allPages) => {
        return allPages.length + 1;
      },
    });

  const toggleImage = (selectedImageId: string) => {
    if (expandedImageId === selectedImageId) {
      setExpandedImageId("");
    } else {
      setExpandedImageId(selectedImageId);
    }
  };

  const getItemInColumn = useCallback(() => {
    let colCount = 1;
    if (innerWidth <= 700) {
      colCount = 1;
    } else if (innerWidth > 700 && innerWidth <= 1000) {
      colCount = 2;
    } else {
      colCount = 3;
    }
    let colGrids = new Array(colCount); // [0: [{},{},], 1: [{},{}]...]
    for (let i = 0; data && i < data?.pageParams.length; i++) {
      for (let j = 0; j < data.pages[i].length; j++) {
        if (colCount < 2) {
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
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      // console.log("in view!!");
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (status === "pending") return <S.Loading>Loading...</S.Loading>;

  if (status === "error")
    return (
      <>
        <h4>
          죄송합니다. 데이터를 불러오는 중에 에러가 발생하였습니다. 새로고침 후
          다시 시도해주시기 바랍니다.
        </h4>
        <div>{`Error: ${error.message}`}</div>
      </>
    );

  return (
    <S.CatViewerContainer>
      <S.CatViewerListContainer>
        <S.HorizontalFlex>
          {getItemInColumn().map((col, colIdx) => {
            return (
              <S.VerticalFlex key={`catViewerColumn${colIdx}`}>
                {col.map((img: CatsInterface, imgIdx: number) => {
                  return (
                    <S.CatViewImage
                      key={`catImage${imgIdx}`}
                      src={img.url}
                      alt="this is cat"
                      $expanded={Boolean(expandedImageId === img.id)}
                      onClick={() => {
                        toggleImage(img.id);
                      }}
                    />
                  );
                })}
              </S.VerticalFlex>
            );
          })}
        </S.HorizontalFlex>
        <div ref={ref} style={{ height: "50px" }} />
        {isFetchingNextPage && <S.Loading>Loading...</S.Loading>}
      </S.CatViewerListContainer>
    </S.CatViewerContainer>
  );
}

export default CatViewer;
