import { Outlet, Link } from "react-router-dom";
import logo from '../assets/images/logo.png';
import { IoAddCircle } from 'react-icons/io5';
import { FaInstagram, FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";

function Layout() {
  return (
    <div>
      <header className="bg-black flex flex-wrap md:flex-nowrap justify-between items-center px-4 md:px-8 gap-4">
        <Link to="/">
        <img src={logo} className="w-[150px] md:w-[180px]" alt="Logo" />
        </Link>
        <ul className="flex gap-4 md:gap-14">
          <li>
            <Link to="/" className="text-white hover:font-bold cursor-pointer hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:font-bold cursor-pointer hover:text-white">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:font-bold cursor-pointer hover:text-white">
              Contact Us
            </Link>
          </li>
        </ul>
        <Link to="/create-blog">
          <button className="bg-orange-600 rounded-full text-white text-sm md:text-base flex items-center px-4 py-2">
            Blog <IoAddCircle className="ml-3 text-[20px]" />
          </button>
        </Link>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      <footer className="bg-black text-center mt-20">
        <div className="flex justify-center gap-6 pt-10">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-white text-xl hover:text-gray-400" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="text-white text-xl hover:text-blue-500" />
            </a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <FaPinterest className="text-white text-xl hover:text-red-500" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-white text-xl hover:text-blue-400" />
            </a>
        </div>
        <h1 className="text-[14px] p-10 text-white">
          Need help? Email xyz@gmail.com<br />
          &copy; 2025 My App. All rights reserved.
        </h1>
      </footer>
    </div>
  );
}

export default Layout;
