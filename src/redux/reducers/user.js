import { createSlice } from "@reduxjs/toolkit";

const createUser = createSlice({
    name: "user",
    initialState: {
        username: null,
        password: null
    },
    // reducers: {
    //     setUser: (state, action) => {
    //
    //     },
    //     removeUser: (state, action) => {
    //         state.username: null,
    //             password: null
    //     }
    // }
});

export const { setUser, removeUser} = createUser.actions;
export default createUser.reducer;