import React from "react";

const Button = ({ label, iconURL }) => {
    return (
            <button className="flex justify-center items-center gap-2 px-7 py-4 border font-lato text-lg leading-none bg-primary text-white rounded-full border-primary">
                {label}

                {iconURL ? <img src={iconURL} alt={label} /> : ""}
            </button>
    );
};

export default Button;
