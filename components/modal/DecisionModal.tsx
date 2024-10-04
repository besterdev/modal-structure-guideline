import { Loader2 } from "lucide-react";
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
  isLoading: boolean;
  onClose: () => void;
  onContinue: () => void;
}

const DecisionModal = ({ isOpen, title, description, isLoading, onClose, onContinue }: DecisionModalProps) => (
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
          <Button className="w-full" variant="outline" onClick={onClose} disabled={isLoading}>
            Cancel
          </Button>
        </AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button className="w-full" variant="destructive" onClick={onContinue} disabled={isLoading}>
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Got It"}
          </Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default DecisionModal;
