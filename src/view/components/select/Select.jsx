import css from "../../pages/resume/resume.module.css"

export const Select = (props) => {
    return (
        <div className={css.selectItem}>
            <p>{props.selectTitle}</p>
            <select className={css.selectBlock} name="" id="">
                <option value="">Android Devs</option>
                {/* {props.selectDes.map((item) => {
                    return (
                        <option value="">{item}</option>
                    )
                })} */}
                {/* <option value="">Back-End Devs</option>
                
                <option value="">Graphic Design</option>
                <option value="">Project Management</option>
                <option value="">QA Testing</option>
                <option value="">UX/UI Design</option> */}
            </select>
        </div>
    )
}