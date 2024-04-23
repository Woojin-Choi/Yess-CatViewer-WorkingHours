import RangeInput from "../components/RangeInput";
import { TimeInterface } from "../model";
import * as S from "../styles/WorkingHoursStyle";

let daysAndTime = [
  {
    day: "Sunday",
    time: [{ start: "00:00", end: "00:15" }],
  },
  {
    day: "Monday",
    time: [
      { start: "00:00", end: "00:15" },
      { start: "00:00", end: "00:15" },
    ],
  },
  { day: "Tuesday", time: [{ start: "00:00", end: "00:15" }] },
  { day: "Wednesday", time: [{ start: "00:00", end: "00:15" }] },
  { day: "Thursday", time: [{ start: "00:00", end: "00:15" }] },
  { day: "Friday", time: [{ start: "00:00", end: "00:15" }] },
  { day: "Saturday", time: [{ start: "00:00", end: "00:15" }] },
];

const WorkingHours = () => {
  return (
    <S.WorkingHoursContainer>
      <S.WorkingHoursInnerWrapper>
        <h4>Working hour</h4>
        <div>
          <h4>Set your weekly hours</h4>
          {daysAndTime.map((d, idx) => {
            return (
              <S.DropdownPanelContainer key={`dropdownPanel${idx}`}>
                <S.DropdownPanelDay>{d.day}</S.DropdownPanelDay>
                <S.DropdownPanelMain>
                  {d.time.map((time: TimeInterface, timeIdx: number) => {
                    return (
                      <RangeInput
                        key={`dropdownPanelMain${timeIdx}`}
                        time={time}
                      />
                    );
                  })}
                </S.DropdownPanelMain>
              </S.DropdownPanelContainer>
            );
          })}
          <S.DropdownPanelBottomButton>cancel</S.DropdownPanelBottomButton>
          <S.DropdownPanelBottomButton>update</S.DropdownPanelBottomButton>
        </div>
      </S.WorkingHoursInnerWrapper>
    </S.WorkingHoursContainer>
  );
};

export default WorkingHours;
