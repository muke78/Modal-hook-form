import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FormHook } from "./FormHook";
import { useModalForm } from "../hooks/useModalForm";
import { useCounter } from "../hooks/useCounter";


export const ModalHook = () => {
  const { counter, increment, decrement, resetForNumber } = useCounter();

  const {
    show,
    username,
    email,
    password,
    date,
    onInputChange,
    resetForm,
    submitForm,
    handleShow,
    handleClose,
  } = useModalForm({
    username: "",
    email: "",
    password: "",
    date: "",
  }, counter);


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal
        backdrop="static"
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal de prueba</Modal.Title>
        </Modal.Header>
        <form onSubmit={submitForm}>
          <Modal.Body>
            <FormHook
              username={username}
              email={email}
              password={password}
              date={date}
              counter={counter}
              onInputChange={onInputChange}
              resetForm={resetForm}
              increment={increment}
              decrement={decrement}
              resetForNumber={resetForNumber}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
