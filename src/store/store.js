import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice.js";
import userReducer from "./Slices/userSlice.js";
import videoReducer from "./Slices/videoSlice.js";
import subscriptionReducer from "./Slices/subscriptionSlice.js";
import likeReducer from "./Slices/likeSlice.js";
import tweetReducer from "./Slices/tweetSlice.js";
import commentReducer from "./Slices/commentSlice.js";
import dashboardReducer from "./Slices/dashboard.js";
import playlistReducer from "./Slices/playlistSlice.js";

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        video: videoReducer,
        subscription: subscriptionReducer,
        like: likeReducer,
        tweet: tweetReducer,
        comment: commentReducer,
        dashboard: dashboardReducer,
        playlist: playlistReducer
    }
});

export default store;
