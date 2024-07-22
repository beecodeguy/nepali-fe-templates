import Image from "next/image";
import ServiceSection from "./_components/service";
import Notices from "./_components/notices";

const imageLink =
  "https://images.pexels.com/photos/7947709/pexels-photo-7947709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="h-[600px] w-full relative">
        <Image src={imageLink} alt="banner" fill />
      </div>
      <section className="p-4 mt-4 grow large-screen">
        <ServiceSection />
        <Notices />
      </section>
    </main>
  );
}
