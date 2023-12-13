import {RouterProvider} from "react-router-dom";
import {routes} from "@/routes";
import {Spinner} from "@/components/Loader";

function App() {

  return (
    <RouterProvider router={routes} fallbackElement={<Spinner/>}/>
  );
}

export default App;
