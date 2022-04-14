import { useEffect, useState } from "react";
import css from "./resume.module.css";
import { Select } from "../../components/select/Select";
import { Candidat } from "../../components/candidat/Candidat";
import API from "../../../api/API";

export const Resume = (props) => {
    const [pending, setPending] = useState(true);
    const [category, setCategory] = useState([]);
    const [resumes, setResumes] = useState([]);

    useEffect(() => {
        API.getResumes().then((res) => {
            setPending(false);
            setResumes(res.data);
        });
        API.getCategories()
            .then((res) => {
                setCategory(res.data)
            })
    }, []);
    if(pending) return <div></div>
    return (
        <div className="container">
            <div className={css.select}>
                <Select key={category.id} profession={category} />
            </div>
            <div className={css.itemsResume}>
                {resumes.map((item) => (
                    <Candidat key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};