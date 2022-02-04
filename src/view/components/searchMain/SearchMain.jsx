import css from "./searchMain.module.css"
import  Loupe from "../../../assets/loupe.png"
export const SearchMain = () => {
    return (
        <div className={css.bgSearch}>
            <div className="container">
                <div className={css.searchTitle}>
                    <p className={css.searchTitleText}>Найдите сотрудника на вашу вакансию среди
                    студентов Codify Academy</p>
                </div>
                <div className={css.searchBlock}>
                    <div className={css.searchInput}>
                        <img src={Loupe} alt="" />
                        <input placeholder="Поиск по направлениям" type="text" />
                    </div>
                    <button>найти</button>
                </div>
            </div>
        </div>
    )
} 