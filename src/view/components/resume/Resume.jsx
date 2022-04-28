import {ResumeCard} from "../resumeCard/ResumeCard"
import css from "./resume.module.css"
import FrontImg from "../../../assets/FrontImg.png"
import BackImg from "../../../assets/BackImg.png"
import AndroidImg from "../../../assets/AndroidImg.png"
import PMImg from "../../../assets/PMImg.png"
import TestingImg from "../../../assets/TestingImg'.png"
import GraphicImg from "../../../assets/GraphicImg.png"
import DesignImg from "../../../assets/DesignImg.png"

export const Resume = ({modal, setModal, isAuth}) => {
    const cardResume = [{
        id: 1, name: "Front End Devs", img: FrontImg
    }, {
        id: 2, name: "Back End Devs", img: BackImg
    }, {
        id: 3, name: "Android Devs", img: AndroidImg
    }, {
        id: 4, name: "Project Management", img: PMImg
    }, {
        id: 5, name: "Testing QA", img: TestingImg
    }, {
        id: 6, name: "Graphic Design", img: GraphicImg
    }, {
        id: 7, name: "UX/UI Design", img: DesignImg
    },]
    return (<div id="resumes" className="container">
            <div className={css.resume}>
                <p className={css.resumeTitle}>Резюме</p>
                <div className={css.cards}>
                    {cardResume.map((item) =>
                        <ResumeCard
                            key={item.id}
                            image={item.img}
                            title={item.name}
                            modal={modal}
                            setModal={setModal}
                            isAuth={isAuth}/>
                    )}
                </div>
            </div>
        </div>)
}