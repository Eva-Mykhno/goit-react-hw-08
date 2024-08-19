import { RingLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
        <RingLoader color="#157d03" cssOverride={{}} loading size={180} />;
    </div>
  );
};

export default Loader;
