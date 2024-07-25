import NoticeBanner from "@/components/notice-banner";
import { NEWS } from "@/lib/consts";

const Notices = () => {
  return (
    <section className="my-5 w-full flex flex-col items-center gap-4 justify-center">
      <h1 className="underline">Notices & Updates</h1>
      <p>Latest News and updates at a glance</p>
      <div className="grid w-full grid-cols-2 place-items-center md:grid-cols-4">
        {NEWS.map((item) => (
          <NoticeBanner key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Notices;
