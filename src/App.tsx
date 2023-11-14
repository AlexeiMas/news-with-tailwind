import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import {NewsSection} from "@/components/NewsSection";
import {Subscription} from "@/components/Subscription";
import {Banners} from "@/components/Banners";
import Topics from "@/components/Topics";

function App() {

  return (
    <div className="max-w-screen-xl mx-auto h-screen grid grid-rows-layout">
      <Header/>
      <section>
        <Breadcrumbs/>
        <Banners/>
        <main className="lg:flex lg:flex-wrap">
          <NewsSection/>
          <div className="w-full lg:w-1/3 px-2 md:flex md:space-x-6 lg:block lg:space-x-0">
            <Topics/>
            <Subscription/>
          </div>
        </main>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
