import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const userImage =
  "https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress";

const TestimonialCard = () => {
  return (
    <Card className="w-[300px] transition-all hover:border-blue-400 hover:border-2">
      {/* <CardHeader>
        <CardTitle className="flex gap-1 justify-end">
          {TestimonialCardRating.map((_, idx) => (
            <Star
              key={idx}
              size={20}
              className="text-yellow-500 fill-yellow-600"
            />
          ))}
        </CardTitle>
      </CardHeader> */}
      <CardContent className="relative">
        <CardDescription className="blockquote mt-4">
          <FaQuoteLeft size={30} className="blockquote text-slate-300" />
          <span className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            vel necessitatibus qui accusamus distinctio fuga rerum fugit aut eos
            minima, quasi ab laudantium dolor, iure, quaerat quidem laboriosam
            quisquam cupiditate.
          </span>
          <FaQuoteLeft
            size={30}
            className="blockquote text-slate-300 ml-auto rotate-180"
          />
        </CardDescription>
      </CardContent>
      <CardFooter className="gap-2">
        <Image
          width={50}
          height={50}
          className="rounded-full border aspect-square object-cover"
          alt="user"
          src={userImage}
        />
        <div className="flex flex-col gap-1">
          <p className="font-semibold">Author Name</p>
          <p className="text-gray-400 uppercase text-sm">Position</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
