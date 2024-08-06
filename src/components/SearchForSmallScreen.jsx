import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import { IoCloseCircleOutline } from "react-icons/io5";

function SearchForSmallScreen({ open, setOpenSearch }) {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const search = (data) => {
        const query = data?.query;
        navigate(`/search/${query}`);
        setOpenSearch((prev) => !prev);
    };

    return (
        <>
            {open && (
                <div className="fixed bg-[#F7F7F7]  dark:bg-[#181818] bg-opacity-90 z-50 inset-0 h-screen w-full flex items-start justify-start">
                    <div className="sm:p-8 p-4 relative w-full">
                        <div className="absolute top-5 right-5">
                            <IoCloseCircleOutline
                                size={30}
                                onClick={() => setOpenSearch((prev) => !prev)}
                            />
                        </div>
                        <form
                            onSubmit={handleSubmit(search)}
                            className="flex items-center mt-10"
                        >
                            <Input
                                type="text"
                                placeholder="Search"
                                className="px-4 py-2 border border-gray-300 focus:outline-none"
                                {...register("query", { required: true })}
                            />
                            <Button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-black dark:text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                Search
                            </Button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default SearchForSmallScreen;
