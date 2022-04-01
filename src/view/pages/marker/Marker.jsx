import { useState, useEffect } from "react";
import css from "./marker.module.css";
import API from "../../../api/API";
import { Candidat } from "../../components/candidat/Candidat";
import axios from "axios";

const Marker = () => {
  const [wishes, setWishes] = useState([]);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    API.getWishlist()
    .then((res) => {
      console.log(res);
      setPending(false)
      setWishes(res.data);
    });
  }, []);
  return (
    <div className={`${css.marker} ${"container"}`}>
      <h1 className={css.title}>Мои закладки</h1>
      <div className={css.markers}>
        {wishes.map((item) => (
          <Candidat key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Marker;
