import {Subscribe} from "@/components/Subscription";
import Divider from "@/components/Divider";

const Subscription = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-full">
      <Divider/>
      <Subscribe/>
      <Divider/>
    </div>
  );
};

export default Subscription;