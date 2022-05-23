import css from "./candidat.module.css";
import Ava from "../../../assets/ava_personal.jpg";
import {Link} from "react-router-dom";

export const Candidat = (props) => {
    return (
        <div>
            <div className={css.info}>
                <div className={css.aboutUser}>
                    <div className={css.image}>
                        <img src={Ava} alt="img"/>
                    </div>
                    <div className={css.aboutUserText}>
                        <p className={css.name}>
                            {
                                `${props.item.surname ? props.item.surname : ""} ${props.item.first_name ? props.item.first_name : ""}`
                            }
                        </p>
                        <p className={css.profession}>{props.item.category}</p>
                    </div>
                </div>
                <div className={css.btns}>
                    <Link className="navLink" to={`/user/${props.item.id}`}>
                        <button className={css.download}>Подробнее</button>
                        <button className={css.download_hidden}>Подробнее</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
