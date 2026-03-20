import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-extrabold text-white tracking-tight mb-4">
            OVERCOMERS NATION
          </h2>
          <p className="mb-6 max-w-sm">
            Winning Though Faith.
          </p>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Overcomers Nation Church. All
            rights reserved.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4">Explore</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/ministries" className="hover:text-white transition">
                Ministries
              </Link>
            </li>
            <li>
              <Link to="/live" className="hover:text-white transition">
                Live Stream
              </Link>
            </li>
            <li>
              <Link to="/give" className="hover:text-white transition">
                Online Giving
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4">Visit Us</h3>
          <p className="mb-2"> Overcomers Church</p>
          <p className="mb-2">Tesano-Accra, Ghana</p>
          <p className="mb-4">(+233) 54 636 3957</p>
          <h4 className="font-bold text-white mt-4 mb-2">Service Times</h4>
          <p>Sundays: 8:00 AM - 10:30 AM</p>
          <p>Tuesdays: 6:00 PM - 10:30 PM</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
