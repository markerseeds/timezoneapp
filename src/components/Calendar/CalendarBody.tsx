import { FunctionComponent } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Draggable } from "react-beautiful-dnd";

import Schedule from "./Schedule";
import {
  TableBodyContainer,
  TableBodyDate,
  TableBodySchedule,
} from "../../styledComponent/index";

const CalendarBody: FunctionComponent<{ userData: string; date: string }> = (
  props
) => {
  // console.log(props.userData);
  // console.log(props.date);
  const schedule = _.orderBy(props.userData, ["time"], ["asc"]).map(
    (data, index: number) => (
      <Draggable
        key={data.data.id}
        draggableId={`${data.data.id}`}
        index={index}
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              ...provided.draggableProps.style,
              boxShadow: snapshot.isDragging ? "0 0 1rem #666" : "none",
              border: snapshot.isDragging ? "1px solid black" : "none",
            }}
          >
            <Schedule
              key={data.data.id}
              id={data.data.id}
              name={data.data.name}
              time={data.data.time}
            />
          </div>
        )}
      </Draggable>
    )
  );

  return (
    <TableBodyContainer>
      <TableBodyDate>{props.date}</TableBodyDate>
      <TableBodySchedule data-testid="drag-element">{schedule}</TableBodySchedule>
    </TableBodyContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  let date = ownProps.year + "-" + ownProps.month + "-" + ownProps.date;
  let userData = (state.schedule || []).filter((data) => data.date === date);
  return {
    userData: userData,
  };
};

export default connect(mapStateToProps)(CalendarBody);
