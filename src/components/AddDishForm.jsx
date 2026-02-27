import React, { useState } from 'react';

function AddDishForm({ onAddDish }) {
  const [dishName, setDishName] = useState('');
  const [dishDescription, setDishDescription] = useState('');

  const handleSubmit = () => {
    if (dishName.trim() === '') return; {/*Don't accept an empty dish*/}
    
    onAddDish({
      name: dishName,
      description: dishDescription
    });
    
    setDishName('');
    setDishDescription('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Dish name"
        value={dishName}
        onChange={(e) => setDishName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dish description"
        value={dishDescription}
        onChange={(e) => setDishDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Add dish</button>
    </div>
  );
}

export default AddDishForm;