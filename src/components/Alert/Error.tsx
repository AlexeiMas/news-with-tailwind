import {PropsWithChildren} from "react";

const Error = ({children}: PropsWithChildren) => {
  return (
    <div className="w-full lg:w-2/3 text-red-600 px-4">
      <div className="border border-red-700 rounded-lg p-4">
        {children}
      </div>
    </div>
  );
};

export default Error;