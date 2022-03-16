import { useEffect, useState } from "react";
import css from "./resume.module.css";
import { Select } from "../../components/select/Select";
import { Candidat } from "../../components/candidat/Candidat";
import API from "../../../api/API";

export const Resume = (props) => {
  const profession = [
    "Frontend",
    "Backend",
    "Project Manager",
    "UX, UI Designe",
    "Android Devs",
    "iOS Devs",
    "Testing QA",
    "Graphis Design",
  ];
  const [resumes, setResumes] = useState([]);
  useEffect(() => {
    API.getResumes().then((res) => {
      setResumes(res.data);
    });
  }, []);

  return (
    <div className="container">
      <div className={css.select}>
      <Select key={profession.id} profession={profession}/>
      </div>
      <div className={css.itemsResume}>
        {resumes.map((item) => (
            <Candidat key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
};
