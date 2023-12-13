import {Suspense} from "react";
import {Spinner} from "@/components/Loader";
import {Outlet} from "react-router-dom";

export const LazyLoadRoutes = () => {
  return (
    <Suspense fallback={<Spinner/>}>
      <Outlet/>
    </Suspense>
  );
};