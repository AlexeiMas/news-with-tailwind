import styles from "./styles.module.css";
import cn from "classnames";

const Spinner = () => {
  return (
    <div className={cn(styles.loader, "text-purple-500", "dark:text-white")}/>
  );
};

export default Spinner;