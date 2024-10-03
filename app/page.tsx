"use client";

import { ModalType, useModalStore } from "@/store/modal";

import { Button } from "@/components/ui/button";

const Home = () => {
  const openModal = useModalStore((state) => state.openModal);

  const handleOpenDecisionModal = () => {
    openModal({
      type: ModalType.Decision,
      title: "Privacy info 🚀",
      description: "The backups created with this functionality may contain some sensitivedata.",
    });
  };

  const handleOpenAcceptModal = () => {
    openModal({
      type: ModalType.Accept,
      title: "Unavailable confirmation 🔥",
      description: "You have already confirmed your seat or already joined this activity",
    });
  };

  return (
    <main className="grid place-items-center w-screen h-screen">
      <div className="flex gap-4">
        <Button
          size="lg"
          variant="outline"
          onClick={handleOpenDecisionModal}
        >
          Open decision modal
        </Button>
        <Button
          size="lg"
          onClick={handleOpenAcceptModal}
        >
          Open accept modal
        </Button>
      </div>
    </main>
  );
};

export default Home;
