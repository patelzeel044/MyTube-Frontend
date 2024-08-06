import React, { useEffect } from "react";
import { ChannelHeader, ChannelNavigate, Spinner } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { userChannelProfile } from "../store/Slices/userSlice";

function EditChannel() {
    const dispatch=useDispatch()
    const username = useSelector((state) => state.auth?.userData?.username);
    const loading = useSelector((state) => state.user?.loading);
    const channel = useSelector((state) => state.user?.profileData);
    useEffect(() => {
        dispatch(userChannelProfile(username));
    }, [dispatch, username]);
    window.scrollTo(0, 0);
    return (
        <>
            {loading && (
                <div className="w-full fixed top-20 flex justify-center z-20">
                    <div className="w-52 border border-slate-600 bg-[#F7F7F7]  dark:bg-[#181818] flex gap-2 p-3">
                        <Spinner />
                        <span className="text-md font-bold text-black dark:text-white">
                             wait...
                        </span>
                    </div>
                </div>
            )}

            {channel && (
                <ChannelHeader
                    username={channel?.username}
                    coverImage={channel?.coverImage}
                    avatar={channel?.avatar}
                    subscribedCount={channel?.channelsSubscribedToCount}
                    fullName={channel?.fullName}
                    subscribersCount={channel?.subscribersCount}
                    isSubscribed={channel?.isSubscribed}
                    channelId={channel?._id}
                    edit={true}
                />
            )}
            <ChannelNavigate edit={true} />
            <div className="overflow-y-scroll h-[32rem] sm:h-96 mb-20 sm:mb-0">
                <Outlet />
            </div>
        </>
    );
}

export default EditChannel;
