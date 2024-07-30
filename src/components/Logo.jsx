import React from "react";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";

function Logo({ size = "30" }) {
    return (
        <>
            <Link to={'/'} className="flex gap-1 items-center">
            <span className="font-extrabold text-white">MY</span>
                <IoLogoYoutube
                    size={size}
                    color="#3b82f6"
                />
            <span className="font-extrabold text-white">Tube</span>
            </Link>
        </>
    );
}

export default Logo;
