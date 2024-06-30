import React from "react";

import { hero } from "../assets/images";
import Button from "../components/Button";


const Hero = () => {
    return (
        <section
            id="home"
            className="w-full flex flex-col border-2 justify-between min-h-screen gap-10 max-container"
        >
            <div className="relative flex xl:flex-row flex-col xl:justify-between items-start w-full max-xl:padding-x pt-28">
                <div className="lg:mt-20 padding-x">
                    <h1 className="font-lato font-bold text-4xl leading-tight mt-12">
                        Combining tradition with modern energy and innovation
                    </h1>
                    <div className="mt-12">
                    <Button  label="Explore roles" />

                    </div>
                </div>
                <div className="mt-20 mr-5 w-full max-w-xl">
                    <img className="object-cover" src={hero} alt="Hero" width={700} height={1000} />
                </div>
            </div>
            <div className="bg-primary font-roboto text-white p-8 text-xl  leading-normal">
                The Worshipful Company of Information Technologists is the 100th
                livery company of the City of London. For over 30 years we have
                raised money for charity and provided IT skills and training to
                improve lives across the UK and beyond.
            </div>
        </section>
    );
};

export default Hero;
