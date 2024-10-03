"use client";

import { ModalType, useModalStore } from "@/store/modal";

import { DecisionModal, AcceptModal } from "@/components/modal";

const ModalProvider = () => {
  const { isOpen, title, description, closeModal, type: modalType } = useModalStore();

  const modalMap: Record<ModalType, JSX.Element | null> = {
    [ModalType.Decision]: (
      <DecisionModal
        isOpen={isOpen}
        title={title}
        description={description}
        onClose={closeModal}
        onContinue={closeModal}
      />
    ),
    [ModalType.Accept]: (
      <AcceptModal
        isOpen={isOpen}
        title={title}
        description={description}
        onContinue={closeModal}
      />
    ),
  };

  return isOpen && modalType ? modalMap[modalType] : null;
};

export default ModalProvider;
