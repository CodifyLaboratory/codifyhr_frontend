import { useState, useEffect } from "react";
import css from "./userResume.module.css";
import { Info } from "../../components/info/Info";
import { useParams } from "react-router-dom";
import API from "../../../api/API";
import FileDownload from "js-file-download";
import PhotoUser from "../../../assets/ava_personal.jpg";
import Save from "../../../assets/save.png";
import Saved from "../../../assets/saved.png";
import axios from "axios"
export const UserResume = () => {
  const [select, setSelect] = useState();
  const [pending, setPending] = useState(true);
  const [resume, setResume] = useState([]);
  // const [image, setImage] = useState([]);
  // const [firstName, setFirstName] = useState([]);
  // const [surname, setSurname] = useState([]);
  // const [phone, setPhone] = useState([]);
  // const [email, setEmail] = useState([]);
  // const [category, setCategory] = useState([]);
  // const [file, setFile] = useState([]);
  // const [lastName, setLastName] = useState([]);
  // const [comment, setComment] = useState([]);
  const params = useParams();

  useEffect(() => {
    API.getResume(params.id)
    .finally(() => setPending(false))
    .then((data) => {
      setResume(data.data);
    });
  }, []);

  const createWish = (e) => {
    e.preventDefault()
    axios.post("https://623446386d5465eaa5170d13.mockapi.io/wishlist/list/", {
      id: resume.id,
    })
    .then((res) => console.log(res.data))
  }
  console.log(createWish);

  if(pending) {
    return <div></div>
  }
  const download = (e) => {
    e.preventDefault()
      FileDownload(resume.file, "resume.pdf")
  }

  return (
    <div className="container">
      <div className={css.infoUser}>
        <div className={css.mainInfo}>
          <div className={css.profilePhoto}>
          {
            resume.image ? 
            <img src={resume.image} alt="img" />
            : 
            <img src={PhotoUser} alt="img" />
          }
          </div>
          <div className={css.mainDes}>
            <div className={css.saveItem}>
              <p key={resume.id} className={css.mainInfoTitle}>
                Основная информация
              </p>
              {!select && (
              <div onClick={createWish}>
                <img
                  className={css.saveImg}
                  src={Save}
                  alt="selecet"
                  onClick={() => setSelect(!select)}
                />
                </div>
              )}
              {select && (
                <div>
                <img
                  className={css.saveImg}
                  src={Saved}
                  alt="seleceted"
                  onClick={() => setSelect(!select)}
                />
                </div>
              )}
            </div>
            <Info titleText="Имя" data={resume.first_name} />
            <Info titleText="Фамилия" data={resume.surname} />
            <Info titleText="Специализация" data={resume.category} />
          </div>
        </div>
        <div className={`${css.mainDes} ${css.mainDes_down}`}>
          <p className={css.mainInfoTitle}>Контактные данные</p>
          <Info titleText="Мобильный телефон" data={resume.phone_number} />
          <Info titleText="Электронная почта" data={resume.email} />
        </div>
      </div>
      <div className={css.infoBtn}>
        <button onClick={(e) => download(e)}>Скачать резюме</button>
      </div>
    </div>
  );
};
