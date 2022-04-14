import { AboutUs } from "../../components/aboutUs/AboutUs"
import { OurPartners } from "../../components/ourPartners/OurPartners"
import { Personnel } from "../../components/personnel/Personnel"
import { Resume } from "../../components/resume/Resume"
import { SearchMain } from "../../components/searchMain/SearchMain"

export const Main = () => {
    return (
        <div>
             <SearchMain/>
            <Resume/>
            <Personnel/>
            <AboutUs/>
            <OurPartners/>
        </div>
    )
}