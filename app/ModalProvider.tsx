"use client";

import { useModalStore } from "@/store/modal";

import { DecisionModal, AcceptModal } from "@/components/modal";

import { ModalType } from "@/types/modal";

const ModalProvider = () => {
  const { isOpen, title, description, onContinue, closeModal, type: modalType, isLoading } = useModalStore();

  const modalMap: Record<ModalType, JSX.Element | null> = {
    [ModalType.Decision]: (
      <DecisionModal
        isOpen={isOpen}
        title={title}
        description={description}
        isLoading={isLoading}
        onClose={closeModal}
        onContinue={onContinue} />
    ),
    [ModalType.Accept]: (
      <AcceptModal
        isOpen={isOpen}
        title={title}
        description={description}
        isLoading={isLoading}
        onContinue={onContinue} />
    ),
  };

  return isOpen && modalType ? modalMap[modalType] : null;
};

export default ModalProvider;
