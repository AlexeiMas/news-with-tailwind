import {ERouteConstants} from "@/routes/constants.ts";
import {lazy, Suspense} from "react";
import {Spinner} from "@/components/Loader";

export const lazyLoadRoutes = (componentName: keyof typeof ERouteConstants) => {
  const LazyElement = lazy(() => import(import.meta.env.MODE === 'development' ? `../pages/${componentName}.tsx` : `../src/pages/${componentName}.tsx`));

  return (
    <Suspense fallback={<Spinner/>}>
      <LazyElement/>
    </Suspense>
  );
};