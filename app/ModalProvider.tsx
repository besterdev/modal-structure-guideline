"use client";

import { ModalType, useModalStore } from "@/store/modal";

import { DecisionModal, AcceptModal } from "@/components/modal";

const ModalProvider = () => {
  const isOpen = useModalStore((state) => state.isOpen);
  const close = useModalStore((state) => state.close);
  const modalType = useModalStore((state) => state.type);

  const mapModal = {
    [ModalType.decision]: (
      <DecisionModal isOpen={isOpen} onClose={close} onContinue={close} />
    ),
    [ModalType.accept]: <AcceptModal isOpen={isOpen} onContinue={close} />,
  };

  return mapModal[modalType as ModalType] || null;
};

export default ModalProvider;
