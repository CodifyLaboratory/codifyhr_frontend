import { useEffect, useState } from "react";
import css from "./searchMain.module.css";
import Loupe from "../../../assets/loupe.png";
import { useHistory } from "react-router-dom";
import API from "../../../api/API";

export const SearchMain = (props) => {
  const [category, setCategory] = useState([]);
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const history = useHistory();


  useEffect(() => {
    API.getCategories()
    .then((res) => {
      setCategory(res.data)
    })
  }, []);


  const filterCategory = category.filter((name) => {
    return name.toLowerCase().includes(value.toLowerCase());
  });

  const submit = (e) => {
    props.setModal(true)
    e.preventDefault();
    if (value) {
      history.push("/resume/");
    } else {
      history.push("/");
    }
  };

  const clickHandler = (e) => {
    setValue(e.target.textContent);
    setIsOpen(!isOpen);
  };
  
  const inputClickHandler = () => {
    setIsOpen(true);
  };
  return (
    <div className={css.bgSearch}>
      <div className="container">
        <div className={css.searchTitle}>
          <p className={css.searchTitleText}>
            Найдите сотрудника на вашу вакансию среди студентов Codify Academy
          </p>
        </div>
        <form onSubmit={submit} className={css.searchBlock}>
          <div className={css.searchInput}>
            <img src={Loupe} alt="" />
            <input
              onChange={(e) => setValue(e.target.value)}
              value={value}
              onClick={inputClickHandler}
              placeholder="Поиск по направлениям"
              type="text"
            />
          </div>
          <ul className={css.filter}>
            {value && isOpen
              ? filterCategory.map((item) => {
                  return <li key={item.id} onClick={clickHandler}>{item.name}</li>;
                })
              : null}
          </ul>
          <button >найти</button>
        </form>
      </div>
    </div>
  );
};
