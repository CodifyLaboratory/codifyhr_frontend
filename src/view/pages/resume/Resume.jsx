import {useEffect, useState} from "react";
import css from "./resume.module.css";
import {Select} from "../../components/select/Select";
import {Candidat} from "../../components/candidat/Candidat";
import API from "../../../api/API";

export const Resume = () => {
    const [pending, setPending] = useState(true);
    const [resumes, setResumes] = useState([]);
    const [category, setCategory] = useState([]);
    const [filtered, setFiltered] = useState(resumes);

    useEffect(() => {
        setFiltered(resumes)
    }, [resumes])

    function filteredResumes(status) {
        if (status === "all") {
            setFiltered(resumes)
        } else {
            let newResumes = [...resumes].filter(item => item.category[0 && 1 && 2] === status)
            setFiltered(newResumes)
        }
    }

    useEffect(() => {
        API.getResumes().then((res) => {
            setPending(false);
            setResumes(res.data);
        });
    }, []);

    useEffect(() => {
        API.getCategories()
            .then((res) => {
                setCategory(res.data)
            })
    }, []);

    if (pending) return <div></div>

    return (
        <div className="container">
            <div className={css.select}>
                <Select category={category} filteredResumes={filteredResumes}/>
            </div>
            <div className={css.itemsResume}>
                {filtered.map((item) => (
                    <Candidat key={item.id} item={item}/>
                ))}
            </div>
        </div>
    );
};