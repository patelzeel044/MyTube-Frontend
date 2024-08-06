import React, { useId } from "react";

const Input = React.forwardRef(function Input(
    { label, type = "text", placeholder, className = "", ...props },
    ref
) {
    const id = useId();
    return (
        <div className="w-full">
            {label && (
                <label className="inline-block mb-1 pl-1" htmlFor={id}>
                    {label}
                </label>
            )}
            <input
                type={type}
                placeholder={placeholder}
                className={`px-3 py-2 bg-[#F5F5F5] dark:bg-[#121212] text-black dark:text-white outline-none focus:bg-[#DCDCDC] dark:bg-[#222222] duration-200 border border-slate-600 w-full ${className}`}
                {...props}
                ref={ref}
                id={id}
            />
        </div>
    );
});

export default Input;
