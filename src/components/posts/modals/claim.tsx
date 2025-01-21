import { useModals } from "@/src/contexts/modals";
import React from "react";
import { Modal } from "../../ui";
import ClaimGivingForm from "../form/claim";

export const ClaimGivingModal = () => {
  const { modals, setModals } = useModals();

  const handleClose = () => {
    setModals((prev) => ({ ...prev, enable: false }));
  };

  return (
    <Modal title="Apply for this Item" isOpen={modals.enable} onClose={handleClose}>
      <ClaimGivingForm />
    </Modal>
  );
};
