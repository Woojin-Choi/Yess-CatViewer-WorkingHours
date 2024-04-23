import styled, { css } from "styled-components";

const CatViewerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CatViewerListContainer = styled.div`
  max-width: 1200px;
  /* border: 1px solid black; */
`;

const CatViewImage = styled.img<{ $expanded: boolean }>`
  width: 100%;
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    props.$expanded &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      object-fit: contain;
      object-position: center;
      z-index: 9999;
    `}
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

export {
  CatViewerContainer,
  CatViewerListContainer,
  CatViewImage,
  Loading,
  HorizontalFlex,
  VerticalFlex,
};
