import React from "react";
import { Button, Modal } from "react-bootstrap";

const NewModal = (props) => {
  const newModalFooter = () => {
    if (props.onSubmit === "Not require a save button") {
      return (
        <Modal.Footer>
            <Button
              variant="primary"
              {...props}
              style={{ backgroundColor: "#333" }}
              className="btn-sm"
              onClick={props.handleClose}
            >
              Close
            </Button>
        </Modal.Footer>
      );
    }else{
      return (
        <Modal.Footer>
          {props.buttons ? (
            props.buttons.map((btn, index) => (
              <Button key={index} variant={btn.color} onClick={btn.onClick}>
                {btn.label}
              </Button>
            ))
          ) : (
            <Button
              variant="primary"
              {...props}
              style={{ backgroundColor: "#333" }}
              className="btn-sm"
              onClick={props.onSubmit}
            >
              Save
            </Button>
          )}
        </Modal.Footer>
      );
    }
  };
  return (
    <Modal size={props.size} show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.modelTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      {newModalFooter()}
    </Modal>
  );
};

export default NewModal;
