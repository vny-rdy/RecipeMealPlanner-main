import { useParams } from 'react-router-dom';
import { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { recipes } from '../data/recipes';

const bannerImages = {
  breakfast: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  lunch: "https://images.unsplash.com/photo-1544025162-d76694265947",
  dinner: "https://images.unsplash.com/photo-1576749872435-ff88a71c1ae2"
};

const mealDescriptions = {
  breakfast: "Start your day with authentic Telangana breakfast dishes",
  lunch: "Experience the rich flavors of traditional Telangana lunch specialties",
  dinner: "End your day with comforting Telangana dinner delicacies"
};

function MealType() {
  const { type } = useParams();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipes.filter(recipe => 
    recipe.mealType === type &&
    (recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  return (
    <div>
      {/* Banner Section */}
      <div 
        className="relative h-64 mb-8 rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url(${bannerImages[type]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">
              {type.charAt(0).toUpperCase() + type.slice(1)} Recipes
            </h1>
            <p className="text-xl">{mealDescriptions[type]}</p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-2xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search recipes by name or ingredient..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default MealType;