import {useEffect, useState} from "react";
import css from "./personal.module.css";
import Ava from "../../../assets/ava_personal.jpg";
import Phone from "../../../assets/phone_personal.svg";
import Email from "../../../assets/email_personal.svg";
import Left from "../../../assets/left_arrow_personal.svg";
import Right from "../../../assets/right_arrow_personal.svg";
import API from "../../../api/API";
import {Candidat} from "../../components/candidat/Candidat";
// import SimpleSlider from "../../components/slider/Slider";

export const Personal = () => {
    const [user, setUser] = useState([])
    const [resumes, setResumes] = useState([])
    const [pending, setPending] = useState(true)

    useEffect(() => {
        API.getUser()
            .then((res) => {
                setUser(res.data)
            })
        API.getResumes().then((res) => {
            setPending(false);
            setResumes(res.data);
        });
    }, [])

    if (pending) return <div></div>

    const clearLocalStorage = () => {
        localStorage.clear()
    }

    return (
        <div className="container">
            <div key={user.id} className={css.personal}>
                <div className={css.ava}>
                    <img src={Ava} alt=""/>
                </div>
                <div className={css.info}>
                    <p></p>
                    <p className={css.company}>{user.first_name ? user.first_name : `"Нет информации"`}</p>
                    <div className={css.phone}>
                        <img src={Phone} alt=""/>
                        <p>{user.last_name ? user.last_name : `"Нет информации"`}</p>
                    </div>
                    <div className={css.email}>
                        <img src={Email} alt=""/>
                        <p>{user.email ? user.email : `"Нет информации"`}</p>
                    </div>
                    <a href="/" onClick={clearLocalStorage} className={css.linkLogout}>Выйти из аккаунта</a>
                </div>
            </div>
            <div className={css.resumes_list}>
                <div className={css.head}>
                    <div className={css.number_of_resumes}>
                        <p>&nbsp;&nbsp;&nbsp; 1-10 из 100 </p>
                        <div className={css.buttons}>
                            <p>
                                <img src={Left} alt=""/>
                            </p>
                            <p>
                                <img src={Right} alt=""/>
                            </p>
                        </div>
                    </div>
                    <hr className={css.line}/>
                    <div className={css.specialization}>
                        <p>ФИО</p>
                        <p>Специализация</p>
                    </div>
                </div>
                <div>
                    {
                        resumes.map((item) => <Candidat item={item} />)
                    }
                </div>
                {/*<SimpleSlider />*/}
                {/* <button className={css.more_btn}>Смотреть еще <p><img src={Down} alt="" /></p></button> */}
            </div>
        </div>
    );
};
