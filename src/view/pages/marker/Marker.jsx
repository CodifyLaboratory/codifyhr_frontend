import { useState, useEffect } from "react";
import css from "./marker.module.css";
import API from "../../../api/API";
import { Candidat } from "../../components/candidat/Candidat";

const Marker = () => {

  const [wishes, setWishes] = useState([]);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    API.getWishlist()
    .then((res) => {
      setPending(false)
      setWishes(res.data);
    });
  }, []);

  if(pending) return <div></div>

  return (
    <div className={`${css.marker} ${"container"}`}>
      <h1 className={css.title}>Мои закладки</h1>
      <div className={css.markers}>

        {
            !wishes.length && <h2 className={css.waterMark}>У вас нет закладок.</h2>
        }

        {wishes.map((item) => (
          <Candidat key={item.id} item={item.wished_resume} />
        ))}

      </div>
    </div>
  );
};

export default Marker;
