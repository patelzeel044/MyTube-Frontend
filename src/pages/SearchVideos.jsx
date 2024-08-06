import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NoVideosFound, VideoList } from "../components";
import HomeSkeleton from "../skeleton/HomeSkeleton";
import { getAllVideos, makeVideosNull } from "../store/Slices/videoSlice";
import { FaFilter } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useParams, useSearchParams } from "react-router-dom";

function SearchVideos() {
    const loading = useSelector((state) => state.video?.loading);
    const videos = useSelector((state) => state.video?.videos);
    const dispatch = useDispatch();
    const { query } = useParams();
    const [filterOpen, setFilterOpen] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const sortType = searchParams.get("sortType");
        const sortBy = searchParams.get("sortBy");
        dispatch(
            getAllVideos({
                query,
                sortBy,
                sortType,
            })
        );
        setFilterOpen(false);
        return () => dispatch(makeVideosNull());
    }, [dispatch, query, searchParams]);

    const handleSortParams = (newSortBy, newSortType = "asc") => {
        setSearchParams({ sortBy: newSortBy, sortType: newSortType });
    };

    if (videos?.totalDocs === 0) {
        return <NoVideosFound text={"Try searching something else"} />;
    }

    if (loading) {
        return <HomeSkeleton />;
    }

    return (
        <>
            <div
                className="w-full h-10 flex items-center font-bold justify-end cursor-pointer px-8"
                onClick={() => setFilterOpen((prev) => !prev)}
            >
                <span className="text-black dark:text-white hover:text-blue-500">
                    Filters
                </span>
                <FaFilter
                    size={20}
                    className="text-blue-500 hover:text-blue-800"
                />
            </div>
            <div className="w-full text-black dark:text-white">
                {filterOpen && (
                    <div className="w-full absolute bg-transparent">
                        <div className="max-w-sm border border-slate-800 rounded bg-[#DCDCDC] dark:bg-[#222222] fixed mx-auto z-50 inset-x-0 h-96 p-5">
                            <h1 className="font-semibold text-lg">
                                Search filters
                            </h1>
                            <IoCloseCircleOutline
                                size={25}
                                className="absolute right-5 top-5 cursor-pointer"
                                onClick={() => setFilterOpen((prev) => !prev)}
                            />
                            <table className="mt-4">
                                <tr className="w-full text-start border-b">
                                    <th>SortBy</th>
                                </tr>
                                <tr className="flex flex-col gap-2 text-slate-900 dark:text-slate-400 cursor-pointer">
                                    <td
                                        onClick={() =>
                                            handleSortParams(
                                                "createdAt",
                                                "desc"
                                            )
                                        }
                                    >
                                        Upload date{" "}
                                        <span className="text-xs">
                                            (Latest)
                                        </span>
                                    </td>
                                    <td
                                        onClick={() =>
                                            handleSortParams("createdAt", "asc")
                                        }
                                    >
                                        Upload date{" "}
                                        <span className="text-xs">
                                            (Oldest)
                                        </span>
                                    </td>
                                    <td
                                        onClick={() =>
                                            handleSortParams("views", "asc")
                                        }
                                    >
                                        View count{" "}
                                        <span className="text-xs">
                                            (Low to High)
                                        </span>
                                    </td>
                                    <td
                                        onClick={() =>
                                            handleSortParams("views", "desc")
                                        }
                                    >
                                        View count{" "}
                                        <span className="text-xs">
                                            (High to Low)
                                        </span>
                                    </td>
                                    <td
                                        onClick={() =>
                                            handleSortParams("duration", "asc")
                                        }
                                    >
                                        Duration{" "}
                                        <span className="text-xs">
                                            (Low to High)
                                        </span>
                                    </td>
                                    <td
                                        onClick={() =>
                                            handleSortParams("duration", "desc")
                                        }
                                    >
                                        Duration{" "}
                                        <span className="text-xs">
                                            (High to Low)
                                        </span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                )}
                <div className="grid h-screen xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 text-black dark:text-white overflow-y-scroll">
                    {videos &&
                        videos?.docs?.map((video) => (
                            <VideoList
                                key={video?._id}
                                thumbnail={video?.thumbnail}
                                duration={video?.duration}
                                title={video?.title}
                                views={video?.views}
                                avatar={video?.owner?.avatar}
                                channelName={video?.owner?.username}
                                createdAt={video?.createdAt}
                                videoId={video?._id}
                            ></VideoList>
                        ))}
                </div>
            </div>
        </>
    );
}

export default SearchVideos;
