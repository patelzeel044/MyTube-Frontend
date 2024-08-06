import React, { useEffect, useState } from "react";
import { NoVideosFound, VideoList } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylistById,makePlaylistNull } from "../../store/Slices/playlistSlice";
import { useParams } from "react-router-dom";

function ChannelPlaylistVideos() {

    const {playlistId} = useParams()

    const dispatch = useDispatch();
    const playlist = useSelector((state) => state.playlist?.playlist);


    useEffect(() => {
       if(playlistId) dispatch(getPlaylistById(playlistId));

        return () => dispatch(makePlaylistNull());

    }, [dispatch, playlistId]);

    if (playlist?.videos?.length == 0) {
        return <NoVideosFound />;
    }

    

    return (
        <>
            
            <div 
        className="flex border-b-2 border-slate-500 px-3 py-1 justify-between font-extrabold items-center text-black dark:text-white"
        >   
            <div className="flex">
                {playlist?.owner?.avatar && (
                        <div className="px-4">
                            <img
                                src={playlist?.owner?.avatar}
                                className="w-10 h-10 rounded-full object-cover border border-slate-700"
                            />
                        </div>
                    )}
               <div >
                <div>{playlist?.name}</div>
                <div className="text-sm font-thin">{playlist?.description}</div>
               </div>
            </div>
               <div>Videos : {playlist?.totalVideos}</div>
            </div>
            {/* Video listing */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 text-black dark:text-white">
                {playlist?.videos?.map((video) => (
                    <VideoList
                        key={video._id}
                        avatar={playlist.owner.avatar}
                        duration={video.duration}
                        title={video.title}
                        thumbnail={video.thumbnail}
                        createdAt={video.createdAt}
                        views={video.views}
                        videoId={video._id}
                    />
                ))}
            </div>
        </>
    );
}

export default ChannelPlaylistVideos;
