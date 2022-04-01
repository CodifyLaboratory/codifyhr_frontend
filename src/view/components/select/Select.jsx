import css from "../../pages/resume/resume.module.css";

export const Select = (props) => {
  return (
    <div className={css.selectItem}>
      <select className={css.selectBlock}>
        {props.profession.map((item) => (
          <option key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
