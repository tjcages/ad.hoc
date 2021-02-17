import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isSignedIn: true,
        userData: null,
        seachInput: "tech",
        calendarData: null,
    },
    reducers: {
        setSignedIn: (state, action) => {
            state.isSignedIn = action.payload;
        },
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        setInput: (state, action) => {
            state.seachInput = action.payload;
        },
        setCalendarData: (state, action) => {
            state.calendarData = action.payload;
        }
    }
})

export const { 
    setSignedIn, 
    setUserData, 
    setInput, 
    setCalendarData 
} = userSlice.actions;

export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.userData;
export const selectUserInput = (state) => state.user.seachInput;
export const selectCalendarData = (state) => state.user.calendarData;

export default userSlice.reducer;