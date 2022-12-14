import React from "react";
import Modal from "../UI/Modal";

const DeleteCategoryModal = (props) => {

  const {
    show,
    handleClose,
    modalTitle,
    expandedArray,
    checkedArray,
    deleteCategories
  } = props;

  return (
    <Modal
      modalTitle={modalTitle}
      show={show}
      handleClose={handleClose}
      buttons={[
        {
          label: "No",
          color: "primary",
          onClick: () => {
            alert("no");
            handleClose();
          },
        },
        {
          label: "Yes",
          color: "danger",
          onClick: deleteCategories,
        },
      ]}
    >
      <h5>Expanded</h5>
      {expandedArray.map((item, index) => (
        <span key={index}>{item.name}</span>
      ))}
      <h5>Checked</h5>
      {checkedArray.map((item, index) => (
        <span key={index}>{item.name}</span>
      ))}
    </Modal>
  );
};

export default DeleteCategoryModal;