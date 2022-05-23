import { useEffect, useState } from "react";
import css from "./personal.module.css";
import Ava from "../../../assets/ava_personal.jpg";
import Phone from "../../../assets/phone_personal.svg";
import Email from "../../../assets/email_personal.svg";
import leftArrow from "../../../assets/arrowSlider.png";
import rightArrow from "../../../assets/arrowRightSlider.png";
import API from "../../../api/API";
import { Candidat } from "../../components/candidat/Candidat";
import { Pending } from "../../components/pending/Pending";

export const Personal = () => {
  const [user, setUser] = useState([]);
  const [resumes, setResumes] = useState([]);
  const [pending, setPending] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentResPage] = useState(5);

  useEffect(() => {
    API.getUser().then((res) => {
      setUser(res.data);
    });
    API.getResumes().then((res) => {
      setPending(false);
      setResumes(res.data);
    });
  }, []);
  if (pending)
    return (
      <div>
        <Pending />
      </div>
    );

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  const lastCountryIndex = currentPage * currentResPage;
  const firstCountryIndex = lastCountryIndex - currentResPage;
  const currentCountry = resumes.slice(firstCountryIndex, lastCountryIndex);

  const nextPaginate = () => setCurrentPage((next) => next + 1);
  const prevPaginate = () => setCurrentPage((prev) => prev - 1);

  
  return (
    <div className="container">
      <div key={user.id} className={css.personal}>
        <div className={css.ava}>
          <img src={Ava} alt="" />
        </div>
        <div className={css.info}>
          <p></p>
          <p className={css.company}>
            {user.first_name ? user.first_name : `"Нет информации"`}
          </p>
          <div className={css.phone}>
            <img src={Phone} alt="" />
            <p>{user.last_name ? user.last_name : `"Нет информации"`}</p>
          </div>
          <div className={css.email}>
            <img src={Email} alt="" />
            <p>{user.email ? user.email : `"Нет информации"`}</p>
          </div>
          <a href="/" onClick={clearLocalStorage} className={css.linkLogout}>
            Выйти из аккаунта
          </a>
        </div>
      </div>
      <div className={css.resumes_list}>
        <div className={css.arrowItems}>
          <div className={css.number_of_resumes}>
            <span>
              {firstCountryIndex}-{lastCountryIndex}
            </span>
            из {resumes.length ? resumes.length : "0"}
          </div>
          <div>
            <button
              className="slick-arrow slick-prev"
              onClick={firstCountryIndex === 0 ? null : prevPaginate}
            >
              <img src={leftArrow} alt="prev-arrow" />
            </button>
            <button
              className="slick-arrow slick-next"
              onClick={
                lastCountryIndex === resumes.length ? null : nextPaginate
              }
            >
              <img src={rightArrow} alt="prev-arrow" />
            </button>
          </div>
        </div>
        <hr className={css.line} />
        <div className={css.specialization}>
          <p>ФИО</p>
          <p>Специализация</p>
        </div>
        <div>
          {resumes ? (
            currentCountry.map((item) => <Candidat item={item} key={item.id} />)
          ) : (
            <p className="noDesc">Нет резюме студентов </p>
          )}
        </div>
      </div>
    </div>
  );
};
