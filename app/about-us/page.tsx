import Image from "next/image";
import React from "react";

const imageLink =
  "https://images.pexels.com/photos/7947709/pexels-photo-7947709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const companyProfile =
  "https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const AboutUsPage = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <div className="h-[300px] w-full relative">
        <Image src={imageLink} alt="banner" fill />
        <div className="absolute w-full h-full flex items-center justify-center">
          <h1 className="absolute z-2 text-white text-4xl">Company Profile</h1>
        </div>
      </div>
      <section className="p-5">
        <h1 className="underline mb-3 text-center">About Us</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 px-3">
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sed
              iste hic nulla sapiente, voluptatibus numquam accusamus esse quasi
              laboriosam molestias doloribus architecto quidem provident
              cupiditate inventore reprehenderit, natus totam!. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quos sed iste hic
              nulla sapiente, voluptatibus numquam accusamus esse quasi
              laboriosam molestias doloribus architecto quidem provident
              cupiditate inventore reprehenderit, natus totam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sed
              iste hic nulla sapiente, voluptatibus numquam accusamus esse quasi
              laboriosam molestias doloribus architecto quidem provident
              cupiditate inventore reprehenderit, natus totam!. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quos sed iste hic
              nulla sapiente, voluptatibus numquam accusamus esse quasi
              laboriosam molestias doloribus architecto quidem provident
              cupiditate inventore reprehenderit, natus totam!
            </p>
          </div>
          <Image
            className="ml-auto"
            src={companyProfile}
            alt="about"
            width={600}
            height={500}
          />
        </div>
      </section>
    </section>
  );
};

export default AboutUsPage;
