import React, { ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader } from "./ui/dialog";
import Image from "next/image";
import { Book, CircleX } from "lucide-react";
import { Button } from "./ui/button";

const HotModals = ({
  open,
  src,
  onAllClose,
  onOpenChange,
}: {
  open: boolean;
  src: string;
  onOpenChange: () => void;
  onAllClose: () => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-slate-100 p-1 max-h-[80vh] max-w-[80vw] overflow-auto">
        <Button
          variant="destructive"
          size="sm"
          className="w-fit -top-[50px] right-0 z-50"
          onClick={onAllClose}
        >
          <span>Close All</span>
          <CircleX size={24} className="ml-3" />
        </Button>
        <div className="content relative overflow-auto min-h-[80vh] w-full">
          <Image src={src} height={600} width={1000} alt="hot-info" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HotModals;
