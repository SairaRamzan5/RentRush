import { faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Showroom = () => (
    <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#394A9A] mb-4">Showroom Accounts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition sm:flex justify-between items-center">
                    <div>
                        <p className="text-xl font-semibold">name</p>
                        <p className="text-gray-600">Rating: rating</p>
                        <p className="text-sm" >
                            Status:
                        </p>
                    </div>
                        <button
                            className="bg-red-500 text-white px-4 sm:py-2 rounded-lg hover:bg-red-600 transition duration-200"
                        >
                            <FontAwesomeIcon icon={faBan} /> Ban
                        </button>
                </div>
        </div>
    </section>
);

export default Showroom;
