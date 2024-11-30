import React, { useState } from 'react';

const Notes = () => {
  const [note, setNote] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const handleInputChange = (e) => {
    setNote(e.target.value);
  };

  const handleSave = () => {
    if (note.trim()) {
      setIsSaved(true);  // Mark the note as saved
    }
  };

  const handleEdit = () => {
    setIsSaved(false);  // Allow the user to edit the note again
  };

  return (
    <div className="bg-white border border-green-300 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-center text-green-700 mb-4">Your Notes</h3>
      <hr />
      <br />
      {!isSaved ? (
        // If the note is not saved, show the input field and save button
        <div>
          <textarea
            value={note}
            onChange={handleInputChange}
            placeholder="Write your notes here..."
            className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
          ></textarea>
          <br />

          <button
            onClick={handleSave}
            className="mt-4 w-full py-2 bg-green-600 text-white rounded-lg hover:bg-yellow-600 transition duration-200"
          >
            Save Note
          </button>
          <br />
        </div>
      ) : (
        // If the note is saved, display the saved note and edit button
        <div>
          <p className="text-gray-700 mb-4">{note}</p>

          <button
            onClick={handleEdit}
            className="mt-4 w-full py-2 bg-yellow-600 text-white rounded-lg hover:bg-green-600 transition duration-200"
          >
            Edit Note
          </button>
        </div>
      )}
    </div>
  );
};

export default Notes;