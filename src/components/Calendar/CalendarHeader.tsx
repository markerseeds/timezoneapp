import { FunctionComponent } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import {
  CalenderHeaderContainer,
  DropdownContainer,
  TimezoneContainer,
  CreateScheduleButton,
} from "../../styledComponent/index";
import { yearOptions, monthOptions } from "../../constant/index";

const CalenderHeader: FunctionComponent<{
  onYearSelect(date : string) : void;
  onMonthSelect(date : string) : void;
  openModal();
  defaultYear: string;
  defaultMonth: string;
  defaultTimezone: string;
}> = (props) => {
  const onYearSelect = (date) => {
    props.onYearSelect(date);
  };

  const onMonthSelect = (date) => {
    props.onMonthSelect(date);
  };

  // header timezone selection
  // const onTimezoneSelect = (timezone) => {
  //   props.onTimezoneSelect(timezone);
  // };

  const openModalHandler = () => {
    props.openModal();
  };

  return (
    <CalenderHeaderContainer>
      <DropdownContainer>
        <Dropdown
          options={yearOptions}
          onChange={onYearSelect}
          value={props.defaultYear}
        />
        <Dropdown
          options={monthOptions}
          onChange={onMonthSelect}
          value={props.defaultMonth}
        />
        <TimezoneContainer>
          Current Timezone: {props.defaultTimezone}{" "}
        </TimezoneContainer>
      </DropdownContainer>
      <CreateScheduleButton onClick={openModalHandler}>
        Create Schedule
      </CreateScheduleButton>
    </CalenderHeaderContainer>
  );
};

export default CalenderHeader;
