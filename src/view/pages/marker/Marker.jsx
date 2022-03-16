import css from "./marker.module.css";
import { Candidat } from "../../components/candidat/Candidat";
const Marker = () => {

  return (
    <div className={`${css.marker} ${"container"}`}>
      <h1 className={css.title}>Мои закладки</h1>
      <div className={css.markers}>
        {/* <Candidat /> */}
      </div>
    </div>
  );
};

export default Marker;
