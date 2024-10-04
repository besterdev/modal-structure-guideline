import { create } from "zustand";

import { ModalType, ModalState, ModalPlayload } from "@/types/modal";

type ModalActions = {
  openModal: (modal: Partial<ModalPlayload>) => void;
  closeModal: () => void;
  setLoading: (isLoading: boolean) => void;
};

const initialState: ModalState = {
  isOpen: false,
  type: null,
  title: "",
  description: "",
  isLoading: false,
  onClose: () => null,
  onContinue: () => null,
};

export const useModalStore = create<ModalState & ModalActions>((set) => ({
  ...initialState,
  openModal: (modal: Partial<ModalPlayload>) => {
    set((state) => ({
      isOpen: true,
      isLoading: false,
      ...modal,
      onClose:
        modal.type === ModalType.Decision ? modal.onClose : state.onClose,
    }));
  },
  closeModal: () => set(initialState),
  setLoading: (isLoading: boolean) => set((state) => ({ ...state, isLoading })),
}));
