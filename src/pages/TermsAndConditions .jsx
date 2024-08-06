import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const TermsAndConditions = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="container mx-auto flex justify-center items-center h-screen">
            <div className="bg-[#F7F7F7]  dark:bg-[#181818] border border-slate-800 text-black dark:text-white rounded-lg p-8 shadow-lg">
                <div className="mb-5 ">
                    <Logo />
                </div>
                <h1 className="text-2xl font-bold mb-4">
                    Terms and Conditions
                </h1>
                <div className="mb-4">
                    <ul className="list-disc list-inside ">
                        
                        <li className="mb-2">
                            This web app is still in development.
                        </li>
                        <li className="mb-2">
                            Do not upload videos greater than 100 MB.
                        </li>
                        <li className="mb-2">
                            Do not upload explicit content.
                        </li>
                    </ul>
                </div>

                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        id="termsCheckbox"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                        className="mr-2 transform scale-125"
                    />
                    <label
                        htmlFor="termsCheckbox"
                        className="font-bold"
                    >
                        I agree to the terms and conditions
                    </label>
                </div>
                <div>
                    {isChecked && (
                        <Link
                            to="/"
                            className="bg-blue-500 hover:bg-blue-600 text-black dark:text-white font-bold py-2 px-4 rounded"
                        >
                            Continue
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
