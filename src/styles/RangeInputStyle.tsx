import styled from "styled-components";

const RangeInputContainer = styled.div`
  display: flex;
  width: 300px;
`;

const RangeInputlHyphen = styled.div`
  float: left;
  margin: auto 20px;
`;

const RangeInputButton = styled.button`
  margin: 0 5px;
  width: 50px;
  height: 40px;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export { RangeInputContainer, RangeInputlHyphen, RangeInputButton };
