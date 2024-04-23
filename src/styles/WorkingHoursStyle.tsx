import styled from "styled-components";

const WorkingHoursContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const WorkingHoursInnerWrapper = styled.div`
  display: flex;
  gap: 100px;
`;

const DropdownPanelContainer = styled.div`
  display: flex;
  gap: 20px;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  padding-bottom: 20px;
`;

const DropdownPanelDay = styled.div`
  margin: auto;
`;

const DropdownPanelMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const DropdownPanelBottomButton = styled.button`
  margin: 10px 10px;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  border-color: gray;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export {
  WorkingHoursContainer,
  WorkingHoursInnerWrapper,
  DropdownPanelContainer,
  DropdownPanelDay,
  DropdownPanelMain,
  DropdownPanelBottomButton,
};
