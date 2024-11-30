import RecipeCard from './RecipeCard';
import { recipes } from '../data/recipes';
import { useState } from 'react';

function RecipeGrid({ mealType }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredRecipes = recipes.filter(recipe => 
    recipe.mealType === mealType &&
    (recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search recipes..."
          className="w-full p-2 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipeGrid;