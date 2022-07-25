// Library imports
import { FunctionComponent } from "react";
import React, { useState, useEffect, Fragment } from "react";
import moment from "moment-timezone";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

// Component imports
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";
import * as actionCreators from "../../store/actions/index";
import FormModal from "./FormModal";
import {
  CalenderDateDayContainerActive,
  CalenderDateDayContainerDisable,
  CalenderDateContainer,
  CalenderWeekDayContainer,
  CalenderWeekContainer,
  CalendarContainerBody,
  CalendarContainer,
} from "../../styledComponent/index";

// Constants
import { weekArray, gridArray } from "../../constant/index";

const Calendar : FunctionComponent = () => {
  const dispatch = useDispatch();
  const { addSchedule, updateSchedule } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const nativeTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const [selectedYear, setSelectedYear] = useState(2022);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedTimezone, setSelectedTimezone] = useState(nativeTimezone);
  const [modalState, setModalState] = useState(false);

  const startOfDay = moment()
    .year(selectedYear)
    .month(selectedMonth)
    .startOf("month")
    .format("ddd");

  const monthSize = parseInt(
    moment().year(selectedYear).month(selectedMonth).endOf("month").format("DD")
  );

  const startIndex = weekArray.indexOf(startOfDay);
  const endIndex = startIndex + monthSize;

  useEffect(() => {
    const defaultYear = moment().format("YYYY");
    const defaultMonth = moment().format("MM");

    setSelectedYear(parseInt(defaultYear));
    setSelectedMonth(parseInt(defaultMonth) - 1);
  }, []);

  const onYearSelectHandler: (a: any) => void = (year) => {
    const { value } = year;
    setSelectedYear(parseInt(value));
  };

  const onMonthSelectHandler: (a: any) => void = (month: any)  => {
    const { value } = month;
    setSelectedMonth(parseInt(value) - 1);
  };

  // const onTimezoneSelectHandler = (timezone) => {
  //   const { value } = timezone;
  //   setSelectedTimezone(value);
  // }

  const openModalHandler = () => {
    setModalState(!modalState);
  };

  const onModalSubmitHandler = (data: {date: string, time: string, timezone: string}) => {
    const date = selectedYear + "-" + (selectedMonth + 1).toString().padStart(2, '0') + "-" + (data.date).toString().padStart(2, '0');
    const timestamp = date.concat(" ", data.time);
   
    let sourceTime = moment.tz(timestamp, data.timezone);
    let convertedTime = sourceTime.tz(selectedTimezone);
    let convertedMonth = moment(convertedTime, "YYYY-M-D hh:mm").month();
    let convertedDay = moment(convertedTime, "YYYY-M-D hh:mm").date();
    let convertedYear = moment(convertedTime, "YYYY-M-D hh:mm").year();

    const newDate = convertedYear + "-" + (convertedMonth + 1) + "-" + convertedDay;
    data.time = (convertedTime.format("YYYY-M-D hh:mm").split(' '))[1];

    const dataByDate: {
      date: string;
      time: string;
      data: object;
    } = {
      date: newDate,
      time: (convertedTime.format("YYYY-M-D hh:mm").split(' '))[1],
      data: data,
    };

    // console.log(dataByDate);
    addSchedule(dataByDate);
  };

  const dragHandler = (param : {draggableId : string, destination : { droppableId : string }}) =>
    updateSchedule({
      sourceId: param.draggableId,
      destDate: param.destination.droppableId,
    });

  // (param) => {
  //   console.log(param);
  //   console.log(`source: ${param.source.droppableId}`);
  //   console.log(`destination: ${param.destination.droppableId}`);
  //   console.log(`draggableid: ${param.draggableId}`); }

  return (
    <Fragment>
      <DragDropContext onDragEnd={dragHandler}>
        <CalendarContainer>
          <CalendarHeader
            onYearSelect={onYearSelectHandler}
            onMonthSelect={onMonthSelectHandler}
            // onTimezoneSelect={onTimezoneSelectHandler}
            defaultYear={selectedYear.toString()}
            defaultMonth={(selectedMonth + 1).toString()}
            defaultTimezone={selectedTimezone}
            openModal={openModalHandler}
          />
          <CalendarContainerBody>
            <CalenderWeekContainer>
              {weekArray.map((data, i) => (
                <CalenderWeekDayContainer key={i}>
                  {data}
                </CalenderWeekDayContainer>
              ))}
            </CalenderWeekContainer>
            <CalenderDateContainer>
              {gridArray.map((data, i : number) =>
                i >= startIndex && i < endIndex ? (
                  <Droppable droppableId={`${i - startIndex + 1}`} key={i}>
                    {(provided : any, snapshot) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        <CalenderDateDayContainerActive key={i}>
                          <CalendarBody
                            date={i - startIndex + 1}
                            month={selectedMonth + 1}
                            year={selectedYear}
                          />
                        </CalenderDateDayContainerActive>
                      </div>
                    )}
                  </Droppable>
                ) : (
                  <CalenderDateDayContainerDisable
                    key={i}
                  ></CalenderDateDayContainerDisable>
                )
              )}
            </CalenderDateContainer>
          </CalendarContainerBody>
        </CalendarContainer>
      </DragDropContext>

      <FormModal
        modalState={modalState}
        openModal={openModalHandler}
        onModalSubmit={onModalSubmitHandler}
        dateRange={endIndex}
      />
    </Fragment>
  );
};

export default Calendar;
