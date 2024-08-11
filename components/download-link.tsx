"use client";

import { ArrowBigDownDash } from "lucide-react";
import toast from "react-hot-toast";

type IProps = {
  handleDownloadClick?: () => void;
  title: string;
  id?: string;
};

const DownloadLink = ({ handleDownloadClick, title, id }: IProps) => {
  return (
    <div className="w-full rounded-sm border flex items-center">
      <div className="p-4 bg-indigo-700 h-[74px] w-[60px] flex justify-center items-center">
        {id && (
          <span className="text-white text-3xl font-extrabold ">{id}</span>
        )}
      </div>
      <div className="p-4 flex items-center justify-start w-full">
        <h6 className="grow capitalize">{title}</h6>
        <div
          className="rounded-full p-2 bg-primary hover:bg-background cursor-pointer text-white"
          onClick={() => {
            handleDownloadClick?.();
            toast.success("Download Clicked");
          }}
        >
          <ArrowBigDownDash size={24} />
        </div>
      </div>
    </div>
  );
};

export default DownloadLink;
