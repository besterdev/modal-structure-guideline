export enum ModalType {
  Decision = "DECISION",
  Accept = "ACCEPT",
}

type BaseModalState = {
  type: ModalType | null;
  isOpen: boolean;
  title: string;
  description: string;
  onContinue: () => void;
};

type DecisionModalState = BaseModalState & {
  type: ModalType.Decision;
  onClose: () => void;
};

type AcceptModalState = BaseModalState & {
  type: ModalType.Accept;
};

type ModalPlayload = DecisionModalState | AcceptModalState;

type ModalState = {
  type: ModalType | null;
  isOpen: boolean;
  title: string;
  description: string;
  isLoading: boolean;
  onContinue: () => void;
  onClose: () => void;
};

export type { ModalPlayload, ModalState };
