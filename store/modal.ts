import { create } from "zustand";

export enum ModalType {
  Decision = "DECISION",
  Accept = "ACCEPT",
}

type ModalState = {
  isOpen: boolean;
  type: ModalType | null;
  title: string;
  description: string;
};

type Modal = {
  type: ModalType;
  title: string;
  description: string;
};

type ModalActions = {
  openModal: (modal: Modal) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalState & ModalActions>((set) => ({
  isOpen: false,
  type: null,
  title: "",
  description: "",
  openModal: (modal: Modal) =>
    set({
      isOpen: true,
      type: modal.type,
      title: modal.title,
      description: modal.description,
    }),
  closeModal: () =>
    set({
      isOpen: false,
      type: null,
      title: "",
      description: "",
    }),
}));
