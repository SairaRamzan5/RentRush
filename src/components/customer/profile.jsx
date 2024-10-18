import React, { useState } from "react";
import Navbar from "../customer/Navbar";

const UserProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        address: "123 Main St",
        cnic: "12345-6789012-3"
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    };

    const handleEdit = () => setIsEditing(true);

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleCancel = () => setIsEditing(false);

    return (
        <div>
            <Navbar />

            <div className="container mx-auto mt-10 p-4">
                <h2 className="text-2xl font-bold mb-4">User Profile</h2>

                <div className="profile-fields">
                    <div className="mb-4">
                        <label className="block font-semibold">Name:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="name"
                                value={userInfo.name}
                                onChange={handleInputChange}
                                className="border p-2 rounded w-full"
                            />
                        ) : (
                            <p>{userInfo.name}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold">Email:</label>
                        {isEditing ? (
                            <input
                                type="email"
                                name="email"
                                value={userInfo.email}
                                onChange={handleInputChange}
                                className="border p-2 rounded w-full"
                            />
                        ) : (
                            <p>{userInfo.email}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold">Phone Number:</label>
                        {isEditing ? (
                            <input
                                type="tel"
                                name="phone"
                                value={userInfo.phone}
                                onChange={handleInputChange}
                                className="border p-2 rounded w-full"
                            />
                        ) : (
                            <p>{userInfo.phone}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold">Address:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="address"
                                value={userInfo.address}
                                onChange={handleInputChange}
                                className="border p-2 rounded w-full"
                            />
                        ) : (
                            <p>{userInfo.address}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold">CNIC:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="cnic"
                                value={userInfo.cnic}
                                onChange={handleInputChange}
                                className="border p-2 rounded w-full"
                            />
                        ) : (
                            <p>{userInfo.cnic}</p>
                        )}
                    </div>
                </div>

                {!isEditing ? (
                    <button
                        onClick={handleEdit}
                        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                    >
                        Edit
                    </button>
                ) : (
                    <div>
                        <button
                            onClick={handleSave}
                            className="bg-green-500 text-white px-4 py-2 rounded mt-4 mr-2"
                        >
                            Save
                        </button>
                        <button
                            onClick={handleCancel}
                            className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                        >
                            Cancel
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserProfile;
