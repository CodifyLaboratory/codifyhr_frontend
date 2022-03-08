import css from "./candidat.module.css"
import Ava from "../../../assets/ava_personal.jpg"
import API from "../../../api/API";
import { useEffect, useState } from "react"
export const Candidat = () => {
  const [resumes, setResumes] = useState([])
  useEffect(() => {
    API.getResumes()
    .then((res) => {
      setResumes(res.data)
    })
  })


    return(
        <div>
            <hr className={css.line}/>
            <div className={css.info}>
                <div><img src={Ava} alt="" /></div>
                <p className={css.name}>{resumes.name} </p>
                <p className={css.profession}>Project Management</p>
                <button className={css.more}>подробнее</button>
                <button className={css.download}>СКАЧАТЬ РЕЗЮМЕ</button>
                <button className={css.download_hidden}>СКАЧАТЬ</button>

            </div>
        </div>
    )
}