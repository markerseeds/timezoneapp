import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../store/actions/index";

import { ScheduleContainer } from "../../styledComponent/index";
import { ButtonDelete } from "../../styledComponent/index";

const Schedule : FunctionComponent<{id: number, name: string, time: string}> = (props) => {
  const dispatch = useDispatch();
  const { deleteSchedule } = bindActionCreators(actionCreators, dispatch);

  const deleteHandler = () => {
    deleteSchedule(props.id);
  };

  return (
    <ScheduleContainer data-testid="custom-element">
      <ButtonDelete onClick={deleteHandler}>x</ButtonDelete>
      {props.name} - Time: {props.time}
    </ScheduleContainer>
  );
};

export default Schedule;
