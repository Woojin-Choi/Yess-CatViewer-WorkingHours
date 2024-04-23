import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { TimeInterface } from "../model";

import { FiPlus, FiTrash } from "react-icons/fi";

import * as S from "../styles/RangeInputStyle";

const RangeInput = ({ time }: { time: TimeInterface }) => {
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        options.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return options;
  };

  const options = generateTimeOptions();

  return (
    <S.RangeInputContainer>
      <div>
        <Dropdown options={options} placeholder={time.start} />
      </div>
      <S.RangeInputlHyphen>-</S.RangeInputlHyphen>
      <div>
        <Dropdown options={options} placeholder={time.end} />
      </div>
      <S.RangeInputButton>
        <FiTrash />
      </S.RangeInputButton>
      <S.RangeInputButton>
        <FiPlus />
      </S.RangeInputButton>
    </S.RangeInputContainer>
  );
};

export default RangeInput;
