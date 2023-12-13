import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {scrollToTopPage} from "@/helpers/libs.ts";

type TScrollToTopProps = {
  behavior?: ScrollBehavior
}
const ScrollToTop = ({behavior}: TScrollToTopProps) => {
  const {pathname} = useLocation();

  useEffect(() => {
    scrollToTopPage(behavior);
  }, [pathname]);

  return null;
};

export default ScrollToTop;