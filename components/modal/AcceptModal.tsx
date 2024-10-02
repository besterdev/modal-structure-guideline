import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface AcceptModalProps {
  isOpen: boolean;
  onContinue: () => void;
}

const AcceptModal = ({ isOpen, onContinue }: AcceptModalProps) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Unavailable confirmation 🔥</AlertDialogTitle>
          <AlertDialogDescription>
            You have already confirmed your seat or already joined this activity
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction asChild>
            <Button
              className="w-full"
              variant="destructive"
              onClick={onContinue}
            >
              Got It
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AcceptModal;
