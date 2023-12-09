import {Banners} from "@/components/Banners";
import {NewsSection} from "@/components/NewsSection";
import Topics from "@/components/Topics";
import {Subscription} from "@/components/Subscription";

const HomePage = () => {
  return (
    <>
      <Banners/>
      <section className="lg:flex lg:flex-wrap">
        <NewsSection/>
        <aside className="w-full lg:w-1/3 px-2 md:flex md:space-x-6 lg:block lg:space-x-0">
          <Topics/>
          <Subscription/>
        </aside>
      </section>
    </>
  );
};

export default HomePage;