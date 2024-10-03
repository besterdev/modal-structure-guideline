import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface DecisionModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  onClose: () => void;
  onContinue: () => void;
}

  const DecisionModal = ({ isOpen, title, description, onClose, onContinue }: DecisionModalProps) => (
  <AlertDialog open={isOpen}>
    <AlertDialogContent className="rounded-lg">
      <AlertDialogHeader>
        <AlertDialogTitle>{title}</AlertDialogTitle>
        <AlertDialogDescription>
          {description}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel asChild>
          <Button className="w-full" variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button className="w-full" variant="destructive" onClick={onContinue}>
            Got It
          </Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default DecisionModal;
