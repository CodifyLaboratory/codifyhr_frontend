import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import css from "../footer/footer.module.css";
function GoogleMap() { 

  return (
    <YMaps>
      <div
        className={css.mapSize}
        style={{ maxWidth: "320px", width: "100%", zIndex: 0}}
      >
        <Map defaultState={{ center: [42.877720, 74.592247], zoom: 16,}}  width="100%">
          <Placemark geometry={[42.877720, 74.592247]}/>
        </Map>
      </div>
    </YMaps>
  );
}

export default GoogleMap;
