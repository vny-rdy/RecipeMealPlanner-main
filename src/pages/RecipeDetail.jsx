import { useParams } from 'react-router-dom';
import { recipes } from '../data/recipes';

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={recipe.image} 
        alt={recipe.name} 
        className="w-full h-96 object-cover"
      />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">{recipe.name}</h1>
        
        <div className="flex space-x-4 mb-6">
          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
            ⏱️ {recipe.prepTime} mins
          </span>
          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
            🔥 {recipe.calories} calories
          </span>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
          <ul className="list-disc pl-5 space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
          <ol className="list-decimal pl-5 space-y-2">
            {recipe.instructions?.map((step, index) => (
              <li key={index} className="text-gray-700">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;