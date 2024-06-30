import React from "react";

import { roles } from "../constants";

import Button from "../components/Button";

const Roles = () => {
    return (
        <section
            id="roles"
            className="w-full flex flex-col justify-center min-h-screen gap-10 max-container"
        >
            {roles.map((role) => (
                <div
                    key={role.label}
                    className="group
                    relative
                    overflow-hidden
                    rounded-lg

                    z-10
                    h-48
                    hover:h-96

                    duration-700
                    transition-all

                    before:content['']
                    before:absolute
                    before:bg-primary/70
                    before:w-0
                    before:h-full
                    before:hover:w-3/4
                    before:-skew-x-[-30deg]
                    before:translate-x-7
                    before:-left-80
                    before:hover:-left-36

                    before:z-10

                    before:transition-all
                    before:duration-700
                ">
                    <div className="absolute w-1/2 z-10 p-4 text-white mt-10">
                        <p className="lg:text-4xl text-lg font-lato">
                            {role.label}
                        </p>
                        <p className="lg:text-2xl text-sm font-roboto mt-5 opacity-0 group-hover:opacity-100  transition-all duration-700">
                            {role.subtext}
                        </p>
                    </div>

                    <img
                        className="absolute w-full h-full object-cover"
                        src={role.imgURL}
                        alt=""
                    ></img>
                    <div className="absolute z-10 bottom-2 right-2 opacity-0 group-hover:opacity-100  transition-all duration-700">
                        <Button label="Learn More" />
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Roles;
