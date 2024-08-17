"use client";
import HotModals from "@/components/hot-modals";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const imageSrc =
  "https://images.unsplash.com/photo-1651245571998-b3a505f2fa96?q=80&w=1974&auto=format&fit=crop";

const randomList = [
  { id: "1", state: true },
  { id: "2", state: true },
  { id: "3", state: true },
];

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentDialog, setCurrentDialog] = useState(0);
  const [isAllClosed, setIsAllClosed] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onModalClose = () => {
    if (currentDialog < randomList.length - 1) {
      setCurrentDialog(currentDialog + 1);
    } else {
      setIsAllClosed(true);
    }
  };

  const handleCloseAll = () => {
    setIsAllClosed(true);
    setCurrentDialog(randomList.length);
  };

  const pathname = usePathname();

  return (
    <>
      {pathname === "/" &&
        randomList?.length > 0 &&
        randomList?.map((item, idx) => (
          <HotModals
            key={item.id}
            open={!isAllClosed && currentDialog === idx}
            onOpenChange={onModalClose}
            onAllClose={handleCloseAll}
            src={imageSrc}
          />
        ))}
    </>
  );
};

export default ModalProvider;
