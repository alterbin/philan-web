import { useModals } from "@/src/contexts/modals";
import React from "react";
import { Modal } from "../../ui";
import NewPostForm from "../form/create";

export const CreatGivingModal = () => {
  const { modals, setModals } = useModals();

  const handleClose = () => {
    setModals((prev) => ({ ...prev, show: false }));
  };

  return (
    <Modal title="Create Given" isOpen={modals.show} onClose={handleClose}>
      <NewPostForm />
    </Modal>
  );
};
