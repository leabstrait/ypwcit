import React from "react";

import { financialItSectors } from "../constants";

const FinancialServicesIT = () => {
    return (
        <div className="w-full flex flex-wrap justify-between items-center min-h-screen gap-4 max-container">
            {financialItSectors.map((sector) => (
                <div
                    key={sector.label}
                    className="m-auto max-w-sm rounded overflow-hidden shadow-lg"
                >
                    <img
                        className="w-full h-full object-cover"
                        src={sector.imgURL}
                        alt={sector.label}
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold font-lato text-xl mb-2">
                            {sector.label}
                        </div>
                        <p className="text-gray-700 font-roboto text-base">
                            {sector.subtext}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FinancialServicesIT;
