import {Header} from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import {Footer} from "@/components/Footer";
import {Outlet} from "react-router-dom";
import ButtonTop from "@/components/ButtonTop.tsx";

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen grid grid-rows-layout">
      <Header/>
      <section>
        <Breadcrumbs/>
        <main>
          <Outlet/>
        </main>
        <ButtonTop/>
      </section>
      <Footer/>
    </div>
  );
};

export default MainLayout;