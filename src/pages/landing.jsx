import React from 'react';
import intro from '../assets/intro.jpeg';
import recipes from '../assets/recipes.jpg';
import weakly from '../assets/weaklyplan.webp';
import shopping from '../assets/shopping1.jpeg';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const Navigate = useNavigate();
    return (
        <div className="p-8 font-sans text-gray-800">
            {/* Intro Section */}
            <section className="flex flex-col md:flex-row justify-between items-center bg-green-200 bg-opacity-30 p-8 mb-12 gap-10 h-[60vh]">
                <div className="md:w-1/2">
                    <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
                        Welcome to Recipe Meal Planner
                    </h1>
                    <p className="text-lg text-black opacity-60 mb-12">
                        Plan your meals, discover new recipes, and organize your shopping efficiently with ease!
                    </p>
                </div>
                <div className="md:w-1/2">
                    <img
                        src={intro}
                        alt="Delicious Meal"
                        className="w-full h-96 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-90"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Explore Our Features</h2>
                <div className="flex flex-col md:flex-row justify-around gap-10">
                    {/* Feature 1 */}
                    <div
                        onClick={() => Navigate('/findrecipes')}
                        className="text-center w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105">
                        <img
                            src={recipes}
                            alt="Recipes"
                            className="w-full h-52 object-cover rounded-lg shadow-md mb-4"
                        />
                        <h3 className="text-2xl font-semibold text-green-600 mb-2">Discover Recipes</h3>
                        <p className="text-gray-600">Browse a wide range of recipes curated just for you.</p>
                    </div>
                    {/* Feature 2 */}
                    <div
                        onClick={() => Navigate('/meals/breakfast')}
                        className="text-center w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105">
                        <img
                            src={weakly}
                            alt="Weekly Plan"
                            className="w-full h-52 object-cover rounded-lg shadow-md mb-4"
                        />
                        <h3 className="text-2xl font-semibold text-green-600 mb-2">Plan Weekly Meals</h3>
                        <p className="text-gray-600">Organize your weekly meal plans with ease and efficiency.</p>
                    </div>
                    {/* Feature 3 */}
                    <div
                        onClick={() => Navigate('/groceries')}
                        className="text-center w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105">
                        <img
                            src={shopping}
                            alt="Shopping Cart"
                            className="w-full h-52 object-cover rounded-lg shadow-md mb-4"
                        />
                        <h3 className="text-2xl font-semibold text-green-600 mb-2">Generate Shopping List</h3>
                        <p className="text-gray-600">
                            Automatically create a shopping list based on your planned meals.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="text-center p-8 bg-gray-100 mt-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Start Planning Your Meals Today!</h2>
                <button
                    onClick={() => Navigate('/')}
                    className="px-8 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold transition-colors duration-300 hover:bg-green-500">
                    Get Started
                </button>
                <p className="text-gray-700 mt-8">
                    Telangana cuisine is known for its spicy and tangy flavors, influenced by both Telugu and Hyderabadi
                    culinary traditions. The cuisine features extensive use of millet, rice, lentils, spices, and
                    seasonal vegetables.
                </p>
            </section>
        </div>
    );
};

export default Landing;
