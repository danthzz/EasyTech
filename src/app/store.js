import { configureStore } from "@reduxjs/toolkit"; 
import userReducer from "../freatures/userSlice";

export default configureStore({
    reducer:{
        user: userReducer,
    },
});