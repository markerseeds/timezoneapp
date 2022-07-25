import styled from "styled-components";

// --------------- Headers --------------------------------------
export const AppHeader = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

export const CalenderHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const DropdownContainer = styled.div`
  display: flex;
`;

export const TimezoneContainer = styled.div`
  margin-left: 28rem;
`;

export const CreateScheduleButton = styled.button`
  border: 1px solid black;
  background: #228c22;
  color: #fff;
`;

// --------------- Schedule --------------------------------------
export const ScheduleContainer = styled.div`
  width: 100%;
  color: #fff;
  background: #000080;
  height: 25px;
  margin-bottom: 3px;
`;

export const ButtonDelete = styled.button`
  width: 10%;
  height: 1.4rem;
  background: #f68a06;
  color: #fff;
  float: left;
  text-align: center;
`;

// --------------- Form Modal --------------------------------------
export const FormCancel = styled.button`
  width: 40%;
  height: 40px;
  background: #f68a06;
  color: #fff;
`;

export const FormSubmit = styled.button`
  width: 40%;
  height: 40px;
  background: #228c22;
  color: #fff;
`;

export const ModalFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const InputField = styled.input`
  width: 70%;
  height: 25px;
  border-radius: 5px;
  &:focus {
    border: 3px solid #89cff0;
    outline: none;
  }
`;

export const SelectField = styled.select`
  width: 70%;
  height: 25px;
  border-radius: 5px;
  &:focus {
    border: 3px solid #89cff0;
    outline: none;
  }
`;

export const InputSpan = styled.div`
  width: 30%;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 15px 0px;
  height: 30px;
  align-items: center;
`;

export const ModalBody = styled.div`
  width: 100%;
`;

export const ModalHeader = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
    padding: "10px",
    border: "1px solid #000",
  },
};

// --------------- Calendar Tables --------------------------------------
export const TableBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TableBodyDate = styled.div`
  text-align: center;
  width: 100%;
  color: white;
  background: black;
  font-size: 12px;
`;

export const TableBodySchedule = styled.div`
  display: flex;
  flex-direction: column;
`;

// --------------- Calendar Container --------------------------------------
export const CalenderDateDayContainerActive = styled.div`
  margin: 1px;
  border: 1px solid gray;
  text-align: center;
  height: 80px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;

export const CalenderDateDayContainerDisable = styled.div`
  margin: 1px;
  text-align: center;
  height: 80px;
`;

export const CalenderDateContainer = styled.div`
  display: grid;
  margin-top: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export const CalenderWeekDayContainer = styled.div`
  margin: 1px;
  border: 1px solid gray;
  text-align: center;
  height: 25px;
  color: #000;
`;

export const CalenderWeekContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export const CalendarContainerBody = styled.div`
  color: blue;
  margin-top: 5px;
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  margin: 2rem 15px;
`;
