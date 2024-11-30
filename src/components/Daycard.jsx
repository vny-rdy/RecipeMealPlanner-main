import React, { useState } from 'react';

const DayCard = ({ dayName }) => {
  const [mealPlan, setMealPlan] = useState({
    Breakfast: '',
    Lunch: '',
    Dinner: '',
  });

  const [currentInput, setCurrentInput] = useState({
    Breakfast: '',
    Lunch: '',
    Dinner: '',
  });

  const handleInputChange = (mealType, value) => {
    setCurrentInput((prev) => ({
      ...prev,
      [mealType]: value,
    }));
  };

  const handleSave = () => {
    const updatedMealPlan = { ...mealPlan };
    for (const mealType in currentInput) {
      if (currentInput[mealType].trim()) {
        updatedMealPlan[mealType] = currentInput[mealType];
      }
    }
    setMealPlan(updatedMealPlan);
    setCurrentInput({
      Breakfast: '',
      Lunch: '',
      Dinner: '',
    });
  };

  const handleDelete = (mealType) => {
    setMealPlan((prev) => ({
      ...prev,
      [mealType]: '',
    }));
  };

  return (
    <div className="bg-white border border-green-300 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-center text-green-700 mb-4">{dayName}</h2>
      <hr className="mb-4" />

      {['Breakfast', 'Lunch', 'Dinner'].map((mealType) => (
        <div className="mb-4" key={mealType}>
          <h3 className="font-semibold text-lg text-gray-700">{mealType}</h3>
          {mealPlan[mealType] ? (
            <div className="flex items-center justify-between bg-white-100 rounded-md shadow-sm">
              <span>{mealPlan[mealType]}</span>
              <button
                className="text-red-600 hover:text-red-800"
                onClick={() => handleDelete(mealType)}
              >
                ❌
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder={`Add item`}
                className="bg-white-100 rounded-md w-full"
                value={currentInput[mealType]}
                onChange={(e) => handleInputChange(mealType, e.target.value)}
              />
            </div>
          )}
        </div>
      ))}

      <button
        className="bg-green-600 text-white py-2 px-6 rounded-lg w-full hover:bg-green-700 transition duration-200"
        onClick={handleSave}
      >
        Save All
      </button>
    </div>
  );
};

export default DayCard;


