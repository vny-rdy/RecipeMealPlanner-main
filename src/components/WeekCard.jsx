import React from 'react';
import DayCard from './Daycard'; 
import Notes from './Notes';

const WeekCard = () => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div>
    <h2 className="col-span-2 sm:col-span-2 lg:col-span-4 text-center text-xl font-semibold mb-6">
        Weekly Meal Plan
      </h2>
    <div className="grid grid-cols-3 sm:grid-cols-3  gap-6">

      {daysOfWeek.map((day) => (
        <div key={day} className="w-full">
          <DayCard dayName={day} />
        </div>
      ))}
      <Notes />
    </div>
    </div>
  );
};

export default WeekCard;


