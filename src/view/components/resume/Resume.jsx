import { ResumeCard } from "../resumeCard/ResumeCard"
import css from "./resume.module.css"
import FrontImg from "../../../assets/FrontImg.png"
import BackImg from "../../../assets/BackImg.png"
import AndroidImg from "../../../assets/AndroidImg.png"
import PMImg from "../../../assets/PMImg.png"
import TestingImg from "../../../assets/TestingImg'.png"
import GraphicImg from "../../../assets/GraphicImg.png"
import DesignImg from "../../../assets/DesignImg.png"

export const Resume = (props) => {
    return (
        <div className="container">
            <div className={css.resume}>
                <p className={css.resumeTitle}>Резюме</p>
                <div className={css.cards}>
                    <ResumeCard image={FrontImg} title="Front End Devs"/>
                    <ResumeCard image={BackImg} title="Back End Devs"/>
                    <ResumeCard image={AndroidImg} title="Android Devs"/>
                    <ResumeCard image={PMImg} title="Project Management"/>
                    <ResumeCard image={TestingImg} title="Testing QA"/>
                    <ResumeCard image={GraphicImg} title="Graphic Design"/>
                    <ResumeCard image={DesignImg} title="UX/UI Design"/>
                </div>
            </div>
        </div>
    )
}