import css from "../footer/footer.module.css"
export const FooterLinks = () => {
    return (
        <div className={css.links}>
            <div className={css.linkBlock}>
                <p className={css.mainLink}>САЙТ</p>
                <p className={css.link}>О нас</p>
                <p className={css.link}>Как мы работаем</p>
                <p className={css.link}>Курсы, тренинги, семинары</p>
                <p className={css.link}>Наши партнеры</p>
                <p className={css.link}>Резюме студентов</p>
                <p className={css.link}>Личный кабинет </p>
                <p className={css.link}>Получить консультацию </p>
            </div>
            <div className={css.link}>
                <p className={css.mainLink}>РЕЗЮМЕ</p>
                <p className={css.link}>Front-end</p>
                <p className={css.link}>Back-end</p>
                <p className={css.link}>Android</p>
                <p className={css.link}>Testing QA</p>
                <p className={css.link}>Project Management</p>
                <p className={css.link}>Graphic Design</p>
                <p className={css.link}>UX / UI</p>
            </div>
            <div className={css.link}>
                <p className={css.mainLink}>ДРУГОЕ</p>
                <p className={css.link}>Способы оплаты</p>
                <p className={css.link}>Основной сайт</p>
                <p className={css.link}>Обратная связь</p>
                <p className={css.link}>Техническая поддержка</p>
            </div>
        </div>
    )
}