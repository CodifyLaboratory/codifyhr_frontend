import { AboutUs } from "../../components/aboutUs/AboutUs"
import { OurPartners } from "../../components/ourPartners/OurPartners"
import { Personnel } from "../../components/personnel/Personnel"
import { Resume } from "../../components/resume/Resume"
import { SearchMain } from "../../components/searchMain/SearchMain"

export const Main = ({modal, setModal, isAuth}) => {
    return (
        <div>
            <SearchMain modal={modal} setModal={setModal} isAuth={isAuth}/>
            <Resume modal={modal} setModal={setModal} isAuth={isAuth}/>
            <Personnel/>
            <AboutUs/>
            <OurPartners/>
        </div>
    )
}