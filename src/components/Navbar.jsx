import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo1.png'; // Replace with the path to your logo image

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-white py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navbar Logo and Title */}
        <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-14 w-auto" /> 
          <Link to="/" className="text-2xl font-bold">Telangana Recipes</Link>
        </div>

        {/* Navbar Links */}
        <div className="flex items-center space-x-12">
          <Link to="/" className="hover:text-green-200">Home</Link>
          <Link to="/findRecipes" className="hover:text-green-200">Find Recipes</Link>
          <div className="relative group">
            <button
              className="hover:text-green-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              Meals ▼
            </button>
            {isOpen && (
              <div className="absolute z-10 bg-white text-gray-800 mt-2 py-2 w-48 rounded-md shadow-lg">
                <Link to="/meals/breakfast" className="block px-4 py-2 hover:bg-green-100">Breakfast</Link>
                <Link to="/meals/lunch" className="block px-4 py-2 hover:bg-green-100">Lunch</Link>
                <Link to="/meals/dinner" className="block px-4 py-2 hover:bg-green-100">Dinner</Link>
              </div>
            )}
          </div>
          <Link to="/groceries" className="hover:text-green-200">Groceries List</Link>
          <Link to="/weeklyplan" className="hover:text-green-200  pr-6">Weekly Plans</Link>

          {/* <Link to="/about" className="hover:text-green-200">About</Link> */}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
