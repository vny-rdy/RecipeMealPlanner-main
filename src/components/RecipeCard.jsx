import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img 
          src={recipe.image} 
          alt={recipe.name} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
          <div className="flex justify-between text-gray-600">
            <span>🥘 {recipe.ingredients.length} ingredients</span>
            <span>⏱️ {recipe.prepTime} mins</span>
          </div>
          <div className="mt-2 text-gray-500">
            <span>🔥 {recipe.calories} cal</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;