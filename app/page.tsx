"use client";

import { ModalType, useModalStore } from "@/store/modal";

import { Button } from "@/components/ui/button";

const Home = () => {
  const openModal = useModalStore((state) => state.open);

  return (
    <main className="grid place-items-center w-screen h-screen">
      <div className="flex gap-4">
        <Button
          size="lg"
          variant="outline"
          onClick={() => openModal(ModalType.decision)}
        >
          Open decision modal
        </Button>
        <Button size="lg" onClick={() => openModal(ModalType.accept)}>
          Open accept modal
        </Button>
      </div>
    </main>
  );
};

export default Home;
