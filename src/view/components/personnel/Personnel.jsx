import { PersonnelNum } from "../personnelNum/PersonnelNum"
import css from "./personnel.module.css"

export const Personnel = () => {
    return (
        <div className={css.personnel}>
            <div className="container">
                <p className={css.personnelTitle}>Codify Академия в цифрах</p>
                <div className={css.personnelSection}>
                    <PersonnelNum num="8" text="различных IT профессий"/>
                    <PersonnelNum num="265+" text="активных студентов"/>
                    <PersonnelNum num="80+" text="трудоустроенных студентов"/>
                    <PersonnelNum num="20+" text="менторов с 3+ лет опыта работы"/>
                </div>
            </div>
        </div>
    )
}