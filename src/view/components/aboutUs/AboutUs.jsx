import css from "./aboutUs.module.css"
import AboutUsLeftImg from "../../../assets/aboutUsLeftImg.png"
import AboutUsRightImg from "../../../assets/aboutUsRightImg.png"
import { AboutUsDescription } from "../aboutUsDescription/AboutUsDescription"

export const AboutUs = () => {
    return (
        <div className="container">
            <div className={css.aboutUs}>
                <div className={css.leftImg}>
                    <img src={AboutUsLeftImg} alt="" />
                </div>
                <AboutUsDescription description="Задача организации, в особенности же консультация с широким активом требует от нас анализа дальнейших направлений развития. А также некоторые особенности 
                    Следует отметить, что дальнейшее развитие различных форм деятельности создаёт предпосылки принимаемыхость вывода текущих активов." title="О нас"/>
                <div className={css.rightImg}>
                    <img src={AboutUsRightImg} alt="" />
                </div>
            </div>
            <div className={css.description}>
                <AboutUsDescription description="Задача организации, в особенности же консультация с широким активом требует от нас анализа дальнейших направлений развития. А также некоторые особенности внутренней политики, вне зависимости от их уровня, должны быть в равной степени предоставлены сами себе. 
                    Следует отметить, что дальнейшее развитие различных форм деятельности создаёт предпосылки для экономической целесообразности принимаемыхость вывода текущих активов." bg={"#F9FBFF"} shadow={"0px 4px 4px rgba(0, 0, 0, 0.15"} padding={"50px 30px"}title="Курсы, семинары, тренинги"/> 
                <AboutUsDescription description="Задача организации, в особенности же консультация с широким активом требует от нас анализа дальнейших направлений развития. А также некоторые особенности внутренней политики, вне зависимости от их уровня, должны быть в равной степени предоставлены сами себе. 
                    Следует отметить, что дальнейшее развитие различных форм деятельности создаёт предпосылки для экономической целесообразности принимаемыхость вывода текущих активов." bg={"#F9FBFF"} shadow={"0px 4px 4px rgba(0, 0, 0, 0.15"} padding={"50px 30px"}title="Как мы работаем"/>
            </div>
        </div>
    )
}