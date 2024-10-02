import { create } from "zustand";

export enum ModalType {
  decision = "DECISION",
  accept = "ACCEPT",
}

type State = {
  isOpen: boolean;
  type: ModalType | null;
};

type Actions = {
  open: (type: ModalType) => void;
  close: () => void;
};

export const useModalStore = create<State & Actions>((set) => ({
  isOpen: false,
  type: null,
  open: (type) => set({ isOpen: true, type }),
  close: () => set({ isOpen: false }),
}));
