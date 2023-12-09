import {PropsWithChildren} from "react";

const RecentUpdatesSection = ({children}: PropsWithChildren) => {
  return (
    <section>
      <h2 className="dark:text-white py-4 text-gray-700 font-bold text-3xl">Recent Updates</h2>
      {children}
    </section>
  );
};

export default RecentUpdatesSection;