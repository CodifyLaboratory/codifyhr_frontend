import { createSlice } from "@reduxjs/toolkit";

const markerSlice = createSlice({
    name: "marker",
    initialState: {
        itemsMarkers: []
    },
    reducers: {
        setItemInMarker: (state, action) => {
            state.itemsMarkers.push(action.payload)
        },
        deleteItemFromMarker: (state, action) => {
            state.itemsMarkers = state.itemsMarkers.filter(marker => marker.id !== action.payload)
        } 
    }
});

export const { setItemInMarker, deleteItemFromMarker} = markerSlice.actions;
export default markerSlice.reducer;