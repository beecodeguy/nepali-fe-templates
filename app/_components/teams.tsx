import Image from "next/image";
import Link from "next/link";
import React from "react";

const userImage =
  "https://images.pexels.com/photos/3959984/pexels-photo-3959984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const Teams = ({ title, name }) => {
  return (
    <div className="px-3 flex items-center cursor-pointer rounded-lg shadow min-h-[300px] sm:flex dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-50">
      <Image
        className="rounded-full aspect-square"
        src={userImage}
        alt="Sofia Avatar"
        width={120}
        height={120}
      />
      <div className="p-5">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">{name}</a>
        </h3>
        <span className="text-gray-500 dark:text-gray-400">{title}</span>
        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
          Lana drives the technical strategy of the flowbite platform and brand.
        </p>
      </div>
    </div>
  );
};

export default Teams;
