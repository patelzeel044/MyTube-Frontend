import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function ChannelNavigate({ username, edit }) {

    const loginUser = useSelector(state=>state.auth.userData.username)

    if (edit) {
        return (
            <>
                <section className="text-black dark:text-white text-center w-full flex justify-evenly items-center border-b-2 border-slate-600 text-xs sm:text-base sm:mt-4 md:mt-0 mt-2">
                    <NavLink
                        to={`/edit/personalInfo`}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-white text-blue-600 border-b-2 border-blue-600"
                                : ""
                        }
                    >
                        <p className="p-2">Personal Information</p>
                    </NavLink>
                    <NavLink
                        to={`/edit/password`}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-white text-blue-600 border-b-2 border-blue-600"
                                : ""
                        }
                    >
                        <p className="p-2">Change Password</p>
                    </NavLink>
                </section>
            </>
        );
    }
    return (
        <>
            {/* channel options */}
            <section className="text-black dark:text-white w-full flex justify-evenly items-center border-b-2 border-slate-600 text-sm sm:text-base sm:mt-4 md:mt-0 mt-2">
                <NavLink
                    to={`/channel/${username}/videos`}
                    className={({ isActive }) =>
                        isActive
                            ? "bg-white text-blue-600 border-b-2 border-blue-600"
                            : ""
                    }
                >
                    <p className="p-2">Videos</p>
                </NavLink>
                <NavLink
                    to={`/channel/${username}/playlists`}
                    className={({ isActive }) =>
                        isActive
                            ? "bg-white text-blue-600 border-b-2 border-blue-600"
                            : ""
                    }
                >
                    <p className="p-2">Playlists</p>
                </NavLink>
                <NavLink
                    to={`/channel/${username}/tweets`}
                    className={({ isActive }) =>
                        isActive
                            ? "bg-white text-blue-600 border-b-2 border-blue-600"
                            : ""
                    }
                >
                    <p className="p-2">Tweets</p>
                </NavLink>
               {(username === loginUser) &&  <NavLink
                    to={`/channel/${username}/subscribers`}
                    className={({ isActive }) =>
                        isActive
                            ? "bg-white text-blue-600 border-b-2 border-blue-600"
                            : ""
                    }
                >
                    <p className="p-2">Subscribers</p>
                </NavLink>}
            </section>
        </>
    );
}

export default ChannelNavigate;
