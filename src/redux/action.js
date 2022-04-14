import { configureStore } from "@reduxjs/toolkit";
import markerList from "./reducers/reducer"

export const store = configureStore({
    reducer: {
        marker: markerList,
    },
}) 