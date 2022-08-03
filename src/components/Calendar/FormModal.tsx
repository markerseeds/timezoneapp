import { FunctionComponent } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import {
  FormCancel,
  FormSubmit,
  ModalFooter,
  InputField,
  SelectField,
  InputSpan,
  InputContainer,
  ModalBody,
  ModalHeader,
  customStyles,
} from "../../styledComponent/index";
import { timeZones } from "../../constant/index";

type dataObject = {
  id: number
  name: string,
  date: string,
  time: string,
  timezone: string
}

const FormModal: FunctionComponent<{
  onModalSubmit(data : dataObject);
  openModal();
  modalState: boolean;
  dateRange: number;
}> = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data : dataObject) => {
    if (data.name && data.date && data.time && data.timezone) {
      data.id = Math.random();
      data.time = data.time.padStart(5, "0");
      console.log(data);
      props.onModalSubmit(data);
      props.openModal();
    }
  };

  return (
    <Modal
      isOpen={props.modalState}
      ariaHideApp={false}
      onRequestClose={props.openModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalHeader>Create Schedule</ModalHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          <InputContainer>
            <InputSpan>Name:</InputSpan>
            <InputField data-testid="name-input" {...register("name")}></InputField>
          </InputContainer>
          <InputContainer>
            <InputSpan>Date:</InputSpan>
            <InputField
              {...register("date")}
              type="number"
              min="1"
              max="31"
              placeholder="Type a number 1 - 31"
              data-testid="date-input"
            ></InputField>
          </InputContainer>
          <InputContainer>
            <InputSpan>Time:</InputSpan>
            <InputField
              {...register("time")}
              type="text"
              pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"
              placeholder="Type a time 0:00 - 23:59"
              data-testid="time-input"
            ></InputField>
          </InputContainer>
          <InputContainer>
            <InputSpan>Timezone:</InputSpan>
            <SelectField data-testid="timezone-input" {...register("timezone")}>
              {timeZones.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </SelectField>
          </InputContainer>
        </ModalBody>
        <ModalFooter>
          <FormSubmit data-testid="submit" type="submit">Submit</FormSubmit>
          <FormCancel onClick={props.openModal}>Cancel</FormCancel>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default FormModal;
