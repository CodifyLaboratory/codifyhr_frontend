import { useEffect, useState } from "react"
import css from "./resume.module.css";
import { Select } from "../../components/select/Select";
import {Candidat} from "../../components/candidat/Candidat"
import API from "../../../api/API";
export const Resume = () => {
  const [resumes, setResumes] = useState([])
  useEffect(() => {
    API.getResumes()
    .then((res) => {
      setResumes(res.data)
    })
  })

  return (
    <div className="container">
      <div className={css.select}>
        <Select selectTitle="Сортировать по" />
      </div>
      <div className={css.itemsResume}>
        {
          resumes.map((item) => <Candidat item={item}/>)
        }
      </div>
    </div>
  );
};
