import Link from "next/link";
import { Alert } from "./ui/alert";
import { Badge } from "./ui/badge";
import LinkButton from "./link-button";
import { cn } from "@/lib/utils";

const NoticeBanner = ({
  isFullWidth = false,
  title,
  description,
  id,
  date,
}) => {
  return (
    <Alert
      className={cn(
        "max-w-[300px] group cursor-pointer bg-white hover:bg-foreground border-l-[6px] border-l-red-500 pb-1",
        {
          "max-w-full": isFullWidth,
        }
      )}
    >
      <Badge variant="secondary">{date}</Badge>
      <h6 className="text-primary group-hover:text-background group-hover:underline transition-all line-clamp-2">
        {title}
      </h6>
      <p
        className={cn("line-clamp-1 text-black", {
          "line-clamp-4": isFullWidth,
        })}
      >
        {description}
      </p>
      <Link
        href={`/news-notices/${id}`}
        className={cn("w-full flex", {
          "justify-end": isFullWidth,
        })}
      >
        <LinkButton />
      </Link>
    </Alert>
  );
};

export default NoticeBanner;
