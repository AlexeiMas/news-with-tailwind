import {createBrowserRouter} from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import {ERouteConstants} from "@/routes/constants";
import {lazy} from "react";
import {LazyLoadRoutes} from "@/routes/LazyLoadRoutes.tsx";

const HomePage = lazy(() => import("../pages/HomePage"));
const DetailsPage = lazy(() => import("../pages/DetailsPage"));

export const routes = createBrowserRouter([
  {
    element: <MainLayout/>,
    children: [
      {
        element: <LazyLoadRoutes/>,
        children: [
          {
            path: ERouteConstants.HomePage,
            element: <HomePage/>
            // async lazy() {
            //   const {HomePage} = await import(`@/pages/HomePage`);
            //   return {
            //     loader: Spinner,
            //     Component: HomePage,
            //   };
            // }
          },
          {
            path: ERouteConstants.DetailsPage,
            element: <DetailsPage/>
            // async lazy() {
            //   const {DetailsPage} = await import("@/pages/DetailsPage");
            //   return {
            //     loader: Spinner,
            //     Component: DetailsPage
            //   };
            // }
          }
        ]
      }
    ]
  }
], {
  basename: import.meta.env.BASE_URL
});
