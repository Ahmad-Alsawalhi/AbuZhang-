import React, { useState } from 'react';

function AddSweetForm({ onAddSweet }) {
  const [sweetName, setSweetName] = useState('');
  const [sweetDescription, setSweetDescription] = useState('');

  const handleSubmit = () => {
    if (sweetName.trim() === '') return; {/*Don't accept an empty dish*/}
    
    onAddSweet({
      name: sweetName,
      description: sweetDescription
    });
    
    setSweetName('');
    setSweetDescription('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Sweet name"
        value={sweetName}
        onChange={(e) => setSweetName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Sweet description"
        value={sweetDescription}
        onChange={(e) => setSweetDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Add sweet</button>
    </div>
  );
}

export default AddSweetForm;