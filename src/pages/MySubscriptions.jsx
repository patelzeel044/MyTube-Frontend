import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubscribedChannels } from "../store/Slices/subscriptionSlice";
import { Link } from "react-router-dom";
import { VideoList, Avatar } from "../components";

function MySubscriptions() {
    const dispatch = useDispatch();
    const subscriptions = useSelector((state) => state.subscription?.mySubscriptions?.subscribedChannels);
    const videos = useSelector( (state) => state.subscription?.mySubscriptions?.videos );
    const subscriptionsCount = useSelector((state) => state.subscription?.mySubscriptions?.subscribedChannelsCount);

    useEffect(() => {
        
            dispatch(getSubscribedChannels());
       
    }, [dispatch]);
    window.scrollTo(0, 0);
    
    return (
        <>
            <div className="flex flex-col p-2 -space-y-3 text-black dark:text-white border-slate-500 border-b-2 bg-[#DCDCDC] dark:bg-[#222222]">
                <div className="flex items-center">
                {subscriptions?.map((subscription) => (
                    <div
                        key={subscription?._id}
                         className="flex flex-col px-1 items-center overflow-x-scroll"
                    >
                     <div className="border-gray-500 border-2 rounded-full">   
                        <Avatar
                            src={subscription?.avatar}
                            channelName={
                                subscription?.username
                            }
                        />
                        </div>
                        <h5 className="text-xs">
                            {subscription?.username}
                        </h5>
                    </div>
                ))}
                </div>
                <div className="font-extrabold" >Subscribed to {subscriptionsCount} Channels</div>
                
            </div>

           { <div className="text-black dark:text-white mb-20 sm:mb-0 w-full grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 overflow-y-scroll">
                {videos?.map((video) => (
                    <Link
                        to={`/watch/${video?._id}`}
                        key={video?._id}
                    >
                        {video && (
                            <VideoList
                                key={video?._id}
                                avatar={ video?.owner?.avatar }
                                duration={ video?.duration }
                                title={ video?.title }
                                thumbnail={ video?.thumbnail }
                                createdAt={ video?.createdAt }
                                views={ video?.views }
                                channelName={ video?.owner?.username}
                                videoId={ video?._id }
                            />
                        )}
                    </Link>
                ))}
            </div>}
        </>
    );
}

export default MySubscriptions;
