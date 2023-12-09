import {Link} from "react-router-dom";
import {ERouteConstants} from "@/routes/constants.ts";
import {ErrorAlert} from "@/components/Alert/index.ts";

type TErrorWithHomeLinkProps = {
  message?: string
}
const ErrorWithHomeLink = ({message}: TErrorWithHomeLinkProps) => {
  return (
    <ErrorAlert>
      {message ?? "Oops, something went wrong..."}
      <Link
        className="flex text-indigo-400 text-sm mt-2 hover:underline"
        to={ERouteConstants.HomePage}
      >Go home page</Link>
    </ErrorAlert>
  );
};

export default ErrorWithHomeLink;