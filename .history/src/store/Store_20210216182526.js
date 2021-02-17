import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../backend/UserSlice'

export default configureStore({
    reducer: {
        user: userReducer,
    }
})