import { create } from "zustand";

import { ModalType, ModalState, ModalPlayload } from "@/types/modal";

type ModalActions = {
  openModal: (modal: Partial<ModalPlayload>) => void;
  closeModal: () => void;
};

const initialState: ModalState = {
  isOpen: false,
  type: null,
  title: "",
  description: "",
  onClose: () => null,
  onContinue: () => null,
};

export const useModalStore = create<ModalState & ModalActions>((set) => ({
  ...initialState,
  openModal: (modal: Partial<ModalPlayload>) => {
    set((state) => ({
      isOpen: true,
      ...modal,
      onClose:
        modal.type === ModalType.Decision ? modal.onClose : state.onClose,
    }));
  },
  closeModal: () => set(initialState),
}));
