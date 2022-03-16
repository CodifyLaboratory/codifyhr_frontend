import React from "react";
import { YMaps, Map } from "react-yandex-maps";
import css from "../footer/footer.module.css";
function GoogleMap() { 

  return (
    <YMaps>
      <div
        className={css.mapSize}
        style={{ maxWidth: "320px", width: "100%", zIndex: 0}}
      >
        <Map defaultState={{ center: [42.87, 74.59], zoom: 17,}}  width="100%"/>
      </div>
    </YMaps>
  );
}

export default GoogleMap;
