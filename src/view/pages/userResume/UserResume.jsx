import { useState, useEffect } from "react";
import css from "./userResume.module.css";
import { Info } from "../../components/info/Info";
import { useParams } from "react-router-dom";
import API from "../../../api/API";
import PhotoUser from "../../../assets/ava_personal.jpg";
import CodifyLogo from "../../../assets/logo.png";
import Save from "../../../assets/save.png";
import Saved from "../../../assets/saved.png";
import jsPDF from "jspdf";

export const UserResume = () => {
  const [select, setSelect] = useState();
  const [pending, setPending] = useState(true);
  const [resume, setResume] = useState([]);
  const [username, setUsername] = useState([]);
  const [surname, setSurname] = useState([]);
  const params = useParams();

  useEffect(() => {
    API.getResume(params.id)
      .finally(() => setPending(false))
      .then((res) => {
        setResume(res.data);
      });
  }, []);


  const createWish = () => {
    API.createWishlist(params.id)
  }
  const deleteWish = () => {
    API.deleteWishlist(resume.id)
  }




  if (pending) {
    return <div></div>;
  }
  const download = () => {
    let doc = jsPDF("landscape", "px", "a4", "false");
    doc.addImage(CodifyLogo, "PNG", 60, 20, 160, 40);
    doc.setFont("Helvertica", "bold");
    doc.text(60, 80, "Name:");
    doc.text(60, 100, "Last name:");
    doc.text(60, 120, "Surname:");
    doc.text(60, 140, "Category:");
    doc.text(60, 160, "Number:");
    doc.text(60, 180, "Email:");
    doc.text(60, 200, "Comment:");
    doc.setFont("Helvertica", "normal");
    doc.text(160, 80, resume.first_name ? resume.first_name : "");
    doc.text(160, 100, resume.last_name ? resume.last_name : "");
    doc.text(160, 120, resume.surname ? resume.surname : "");
    doc.text(160, 140, resume.category ? resume.category : "");
    doc.text(160, 160, resume.phone_number ? resume.phone_number : "");
    doc.text(160, 180, resume.email ? resume.email : "");
    doc.comment(160, 200, resume.comment ? resume.comment : "");
    doc.save(`${resume.first_name} ${resume.surname}`);
  };

  return (
    <div className="container">
      <div className={css.infoUser}>
        <div className={css.mainInfo}>
          <div className={css.profilePhoto}>
            <img src={PhotoUser} alt="img" />
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
                    alt="select"
                    onClick={() => setSelect(!select)}
                  />
                </div>
              )}
              {select && (
                <div onClick={deleteWish}>
                  <img
                    className={css.saveImg}
                    src={Saved}
                    alt="selected"
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
