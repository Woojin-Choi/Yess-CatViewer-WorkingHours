import styled from "styled-components";

const CatViewerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CatViewerListContainer = styled.div`
  max-width: 1200px;
  /* border: 1px solid black; */
`;

const CatVieweImage = styled.img`
  width: 100%;
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
  CatVieweImage,
  Loading,
  HorizontalFlex,
  VerticalFlex,
};
