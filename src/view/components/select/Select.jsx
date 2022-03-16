import css from "../../pages/resume/resume.module.css";

export const Select = (props) => {
  return (
    <div className={css.selectItem}>
      <p key={props.profession.id}>{props.selectTitle}</p>
      <select className={css.selectBlock}>
        {props.profession.map((item) => (
          <option key={props.key} value="">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
