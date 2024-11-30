import { useState, useEffect } from 'react';
import { recipes } from '../data/recipes';

function GroceriesList() {
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [groceryList, setGroceryList] = useState([]);

  useEffect(() => {
    const savedRecipes = localStorage.getItem('selectedRecipes');
    if (savedRecipes) {
      setSelectedRecipes(JSON.parse(savedRecipes));
    }
  }, []);

  useEffect(() => {
    const ingredients = selectedRecipes.flatMap(recipeId => {
      const recipe = recipes.find(r => r.id === recipeId);
      return recipe ? recipe.ingredients : [];
    });
    
    const uniqueIngredients = [...new Set(ingredients)];
    setGroceryList(uniqueIngredients);
    
    localStorage.setItem('selectedRecipes', JSON.stringify(selectedRecipes));
  }, [selectedRecipes]);

  const toggleRecipe = (recipeId) => {
    setSelectedRecipes(prev => 
      prev.includes(recipeId)
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-orange-600">Grocery List</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Select Recipes</h2>
          <div className="space-y-2">
            {recipes.map(recipe => (
              <label key={recipe.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedRecipes.includes(recipe.id)}
                  onChange={() => toggleRecipe(recipe.id)}
                  className="rounded text-orange-600"
                />
                <span>{recipe.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Ingredients Needed</h2>
          {groceryList.length > 0 ? (
            <ul className="list-disc pl-5 space-y-2">
              {groceryList.map((ingredient, index) => (
                <li key={index} className="text-gray-700">{ingredient}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Select recipes to generate your grocery list</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default GroceriesList;