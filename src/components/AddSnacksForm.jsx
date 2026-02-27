import React, { useState } from 'react';

function AddSnacksForm({ onAddDish }) {
  const [snackName, setSnackName] = useState('');
  const [snackDescription, setSnackDescription] = useState('');

  const handleSubmit = () => {
    if (snackName.trim() === '') return; {/*Don't accept an empty dish*/}
    
    onAddDish({
      name: snackName,
      description: snackDescription
    });
    
    setSnackName('');
    setSnackDescription('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Snack name"
        value={snackName}
        onChange={(e) => setSnackName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Snack description"
        value={snackDescription}
        onChange={(e) => setSnackDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Snack</button>
    </div>
  );
}

export default AddSnacksForm;