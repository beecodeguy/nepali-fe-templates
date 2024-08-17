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
      <DialogContent className="bg-slate-100 p-1 max-h-[80vh] md:w-fit max-w-[90vw] overflow-auto">
        <div className="relative">
          <Button
            variant="destructive"
            size="sm"
            className="w-fit -top-[50px] right-0 z-50 sticky"
            onClick={onAllClose}
          >
            <span>Close All</span>
            <CircleX size={24} className="ml-3" />
          </Button>
        </div>
        <div className="content relative overflow-auto w-full md:min-w-[700px] h-[80vh]">
          <Image src={src} fill alt="hot-info" style={{ objectFit: "cover" }} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HotModals;
