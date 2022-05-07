import css from "../../pages/resume/resume.module.css";

export const Select = ({category, filteredResumes}) => {

    return (
        <div className={css.selectItem}>
            Сортировать по
            <select className={css.selectBlock} value={category.name} onChange={(e) => filteredResumes(e.target.value)}>
                {
                    category.length ?
                        <>
                            <option className={css.selectOption} value="all" onClick={(e) => filteredResumes(e.target.value)}>Все</option>
                            {
                                category.map((item) => <option className={css.selectOption} key={item.id} value={item.name} onClick={(e) => filteredResumes(e.target.value)}>{item.name}</option>)
                            }
                        </>
                        :
                        <option>Нет специальностей</option>
                }

            </select>
        </div>
    );
};
