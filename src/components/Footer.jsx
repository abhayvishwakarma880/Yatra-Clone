import { NavLink } from 'react-router-dom';
import Lfoot from './Lfoot';

export default function Footer() {
  const popularRoutes = [
    'Delhi to Mumbai Flight',
    'Delhi to Chennai Flight',
    'Delhi to Goa Flight',
    'Delhi to Bangalore Flight',
    'Delhi to Kolkata Flight',
    'Mumbai to Chennai Flight',
    'Delhi to Hyderabad Flight',
    'Bangalore to Hyderabad Flight',
    'Mumbai to Kolkata Flight',
    'Delhi to Pune Flight',
    'Bangalore to Goa Flight',
    'Delhi to Jaipur Flight',
    'Delhi to Srinagar Flight',
    'Mumbai to Nagpur Flight',
    'Delhi to Varanasi Flight',
    'Bangalore to Ahmedabad Flight',
    'Mumbai to Surat Flight',
    'Chennai to Bangalore Flight',
    'Mumbai to Udaipur Flight',
    'Bangalore to Kochi Flight'
  ];

  const domesticRoutes = [
    'Bangalore to Pune Flight',
    'Bhopal to Indore Flight',
    'Chennai to Kochi Flight',
    'Mumbai to Udaipur Flight',
    'Delhi to Amritsar Flight',
    'Bangalore to Goa Flight',
    'Trichy to Chennai Flight',
    'Visakhapatnam to Chennai Flight',
    'Delhi to Dehradun Flight',
    'Delhi to Jaipur Flight',
    'Hyderabad to Bangalore Flight',
    'Delhi to Jodhpur Flight',
    'Indore to Delhi Flight',
    'Delhi to Goa Flight',
    'Chennai to Ahmedabad Flight',
    'Delhi to Vadodara Flight',
    'Hyderabad to Goa Flight',
    'Kolkata to Silchar Flight',
    'Chandigarh to Delhi Flight',
    'Bangalore to Mangalore Flight'
  ];

  const internationalRoutes = [
    'Dubai to Delhi Flight',
    'Mumbai to Toronto Flight',
    'Mumbai to Dubai Flight',
    'Dubai to Amritsar Flight',
    'Delhi to Hanoi Flight',
    'Trivandrum to Dubai Flight',
    'Hyderabad to Bangkok Flight',
    'Delhi to Auckland Flight',
    'Delhi to Riyadh Flight',
    'Mumbai to Paris Flight',
    'Delhi to Dubai Flight',
    'Kolkata to Dhaka Flight',
    'Chennai to Colombo Flight',
    'Delhi to Paris Flight',
    'Delhi to Doha Flight',
    'Chennai to Kuala lumpur Flight',
    'Bangalore to London Flight',
    'Delhi to Bali Flight',
    'Dubai to Mangalore Flight',
    'Mumbai to Riyadh Flight'
  ];

  const products = [
    'Flights',
    'International Airlines',
    'Domestic Airlines',
    'Hotels',
    'Trains',
    'Bus Booking',
    'Holidays',
    'International Holiday Packages',
    'India Holiday Packages',
    'Outstation Cabs',
    'Indian Monument',
    'MICE'
  ];

  return (
    <>
    <footer className="w-[95%] mx-auto mt-10  rounded-2xl px-8 py-10">
      <div className="max-w-7xl mx-auto">
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Popular Flight Routes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-3">
            {popularRoutes.map((route, index) => (
              <NavLink
                key={index}
                to="#"
                className="text-gray-600 text-sm hover:text-red-600 transition-colors"
              >
                {route}
              </NavLink>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Popular Domestic Flight Routes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-3">
            {domesticRoutes.map((route, index) => (
              <NavLink
                key={index}
                to="#"
                className="text-gray-600 text-sm hover:text-red-600 transition-colors"
              >
                {route}
              </NavLink>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Popular International Flight Routes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-3">
            {internationalRoutes.map((route, index) => (
              <NavLink
                key={index}
                to="#"
                className="text-gray-600 text-sm hover:text-red-600 transition-colors"
              >
                {route}
              </NavLink>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Yatra Products</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {products.map((product, index) => (
              <NavLink
                key={index}
                to="#"
                className="text-gray-600 text-sm hover:text-red-600 transition-colors"
              >
                {product}
              </NavLink>
            ))}
          </div>
        </section>

        
      </div>
      
    </footer>
    <Lfoot />
    </>
  );
}