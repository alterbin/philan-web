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
    <Modal title="Give Item" subTitle="To give an item, kindly fill the form below" isOpen={modals.show} onClose={handleClose}>
      <NewGivenForm />
    </Modal>
  );
};
