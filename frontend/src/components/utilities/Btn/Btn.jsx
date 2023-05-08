import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import FormPlant from "../FormPage/FormPlant";
import FormAnimal from "../FormPage/FormAnimal";

const Btn = ({ visible, type }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleModal = (visible) => {
    if (visible === true) handleShow();
  };

  return (
    <>
      <Button onClick={() => handleModal(visible)}>Donate Money</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          {type === "plant" ? <FormPlant /> : <FormAnimal />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Btn;
