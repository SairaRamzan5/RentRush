import { faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Showroom = ({ showrooms, banShowroom }) => (
    <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#394A9A] mb-4">Showroom Accounts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {showrooms.map((showroom) => (
                <div key={showroom.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition sm:flex justify-between items-center">
                    <div>
                        <p className="text-xl font-semibold">{showroom.name}</p>
                        <p className="text-gray-600">Rating: {showroom.rating}</p>
                        <p className={`text-sm ${showroom.status === "Banned" ? "text-red-500" : "text-green-500"}`}>
                            Status: {showroom.status}
                        </p>
                    </div>
                    {showroom.status !== "Banned" && (
                        <button
                            onClick={() => banShowroom(showroom.id)}
                            className="bg-red-500 text-white px-4 sm:py-2 rounded-lg hover:bg-red-600 transition duration-200"
                        >
                            <FontAwesomeIcon icon={faBan} /> Ban
                        </button>
                    )}
                </div>
            ))}
        </div>
    </section>
);

export default Showroom;
