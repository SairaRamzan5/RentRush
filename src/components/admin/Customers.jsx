
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Customers = () => (
  <>  
   <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#394A9A] mb-4">Customer Accounts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <FontAwesomeIcon icon={faUser} className="text-[#394A9A] mb-2" size="2x" />            <p className="text-xl font-semibold">name</p>
      <p className="text-gray-600">Email:</p>
        </div>
        </div>
    </section>
   </>
 
);

export default Customers;
