import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    loading: false,
    subscribed: null, 
    channelSubscribers: [],
    mySubscriptions: null,
    subscribersCount:null,
    subscribedChannelsCount:null
};

export const toggleSubscription = createAsyncThunk(
    "toggleSubscription",
    async (channelId) => {
        try {
            const response = await axiosInstance.post(
                `subscriptions/c/${channelId}`
            );
            return response.data.data;
        } catch (error) {
            toast.error(error?.response?.data?.error);
            throw error;
        }
    }
);

export const getUserChannelSubscribers = createAsyncThunk(
    "getUserChannelSubscribers",
    async () => {
        try {
            const response = await axiosInstance.get(`subscriptions/subscribers`);
            return response.data.data;
            
        } catch (error) {
            toast.error(error?.response?.data?.error);
            throw error;
        }
    }
);

export const getSubscribedChannels = createAsyncThunk(
    "getSubscribedChannels",
    async () => {
        try {
            const response = await axiosInstance.get(`subscriptions/subscribed-Channels`);
            return response.data.data[0];
            
        } catch (error) {
            toast.error(error?.response?.data?.error);
            throw error;
        }
    }
);

const subscriptionSlice = createSlice({
    name: "subscription",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(toggleSubscription.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(toggleSubscription.fulfilled, (state, action) => {
            state.loading= false;
            (action.payload?._id) ? (state.subscribed= true )
                                  : (state.subscribed= false )
        });
        builder.addCase(getUserChannelSubscribers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            getUserChannelSubscribers.fulfilled,
            (state, action) => {
                state.loading = false;
                state.channelSubscribers = action.payload.subscribers;
                state.subscribersCount= action.payload.subscribersCount
            }
        );
        builder.addCase(getSubscribedChannels.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getSubscribedChannels.fulfilled, (state, action) => {
            state.loading = false;
            state.mySubscriptions = action.payload
            state.subscribedChannelsCount= action.payload.subscribedChannelsCount
        });
    },
});

export default subscriptionSlice.reducer;
