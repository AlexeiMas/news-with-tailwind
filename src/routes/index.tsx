import {createBrowserRouter} from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import {ERouteConstants} from "@/routes/constants";
import {lazyLoadRoutes} from "@/routes/LazyLoadRoutes";

export const routes = createBrowserRouter([
  {
    element: <MainLayout/>,
    children: [
      {
        path: ERouteConstants.HomePage,
        element: lazyLoadRoutes("HomePage")
      },
      {
        path: ERouteConstants.DetailsPage,
        element: lazyLoadRoutes("DetailsPage")
      }
    ]
  }
]);