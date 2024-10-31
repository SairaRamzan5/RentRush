
import { faCar, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Customers from './Customers';
// import Home from './Home';
import Showroom from './Showroom';

const Adminpage = () => {
    const [customers, setCustomers] = useState([
        { 
          id: 1, 
          name: "Ibrahim", 
          email: "Ib@ex.com" 
        },
        { 
          id: 2, 
          name: "Azhar", 
          email: "Az@ex.com" 
        },
        { 
          id: 3, 
          name: "Abdullah", 
          email: "Az@ex.com" 
        },
        { 
          id: 4, 
          name: "Fadi", 
          email: "Az@ex.com" 
        },
        { 
          id: 5, 
          name: "Abbas", 
          email: "Az@ex.com" 
        },
        { 
          id: 6, 
          name: "xyz", 
          email: "Az@ex.com" 
        },
    ]);

    const [showrooms, setShowrooms] = useState([
        { 
          id: 1, 
          name: "Elite Cars", 
          rating: 3.5, 
          status: "Active" 
        },
        { 
          id: 2, 
          name: "Luxury Wheels", 
          rating: 2.5, 
          status: "Active" 
        },
        { 
          id: 3, 
          name: "Prime Motors", 
          rating: 6.5, 
          status: "Active" 
        },
        { 
          id: 4, 
          name: "Royal Rides", 
          rating: 8.5, 
          status: "Active" 
        },
    ]);

    const banShowroom = (id) => {
        setShowrooms(showrooms.map((showroom) =>
            showroom.id === id ? { ...showroom, status: "Banned" } : showroom
        ));
        alert("Showroom has been banned.");
    };

    return (
        <Router>
            <div className="flex min-h-screen bg-gray-100">
                {/* Sidebar */}
                <aside className=" w-64 bg-[#02073F] p-6 text-white">
                    <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
                    <nav className="space-y-4">

                        <Link to="/" className="flex items-center space-x-2 text-lg   hover:bg-[#394A9A] p-3 rounded-lg w-full">
                            <FontAwesomeIcon icon={faUsers} />
                            <span>Home</span>
                        </Link>

                        <Link to="/customers" className="flex items-center space-x-2 text-lg hover:bg-[#394A9A] p-3 rounded-lg w-full">
                            <FontAwesomeIcon icon={faUsers} />
                            <span>Customers</span>
                        </Link>

                        <Link to="/showrooms" className="flex items-center space-x-2 text-lg hover:bg-[#394A9A] p-3 rounded-lg w-full">
                            <FontAwesomeIcon icon={faCar} />
                            <span>Showrooms</span>
                        </Link>

                        <button className="flex items-center space-x-2 text-lg hover:bg-[#394A9A] p-3 rounded-lg w-full">
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            <span>Logout</span>
                        </button>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-8">
                    <Routes>
                        {/* <Route path="/" element={<Home />} /> */}
                        <Route path="/customers" element={<Customers customers={customers} />} />
                        <Route path="/showrooms" element={<Showroom showrooms={showrooms} banShowroom={banShowroom} />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default Adminpage;
