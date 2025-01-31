import { useModals } from "@/src/contexts/modals";
import React from "react";
import { Modal } from "@/src/components/ui";
import NewGivenForm from "../form/create";

export const CreatGivenModal = () => {
  const { modals, setModals } = useModals();

  const handleClose = () => {
    setModals((prev) => ({ ...prev, show: false }));
  };

  return (
    <Modal title="Create Given" isOpen={modals.show} onClose={handleClose}>
      <NewGivenForm />
    </Modal>
  );
};
