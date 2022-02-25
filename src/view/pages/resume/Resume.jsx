import css from "./resume.module.css";
import { Select } from "../../components/select/Select";
import {Candidat} from "../../components/candidat/Candidat"
export const Resume = () => {
  return (
    <div className="container">
      <div className={css.select}>
        <Select selectTitle="Сортировать по" />
      </div>
      <div className={css.selectDes}>
        <Select />
        <Select />
        <Select />
      </div>
      <div className={css.itemsResume}>
        <Candidat/>
        <Candidat/>
        <Candidat/>
        <Candidat/>
        <Candidat/>
      </div>
    </div>
  );
};
