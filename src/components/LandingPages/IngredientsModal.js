import React, { useEffect, useState } from 'react';
import './IngredientsModal.css';

const IngredientsModal = ({ isOpen, onClose, dripUUID }) => {
  const [ingredients, setIngredients] = useState([]);
  const [addons, setAddons] = useState([]);
  const [dripName, setDripName] = useState('');

  useEffect(() => {
    console.log(isOpen, dripUUID)
    const fetchIngredients = async () => {
      try {
        console.log('fetching ingredients');
        const response = await fetch('/api/getIngredientsByDrip', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ dripUUID }),
        });
        const data = await response.json();
        console.log(data)
        const ingredientsArray = data.ingredients.split(',');
        setIngredients(ingredientsArray);
        setAddons(data.addons);
        setDripName(data.dripName);
      } catch (error) {
        console.error('Error fetching ingredients:', error);
      }
    };

    if (isOpen && dripUUID) {
      fetchIngredients();
    }
  }, [isOpen, dripUUID]);

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h3>{dripName}</h3>
        {/* <p>Drip UUID: {dripUUID}</p> */}
        <h4>Ingredients:</h4>
        <ul>
          {ingredients && ingredients.length > 0 && ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        {/* <h4>Available Addons (With Doctor Approval):</h4>
        <ul>
          {addons.map((addon, index) => (
            <li key={index}>{addon}</li>
          ))}
        </ul> */}
        <button onClick={onClose} style={{ backgroundColor: '#ff4040', color: 'white', fontWeight: '500', fontFamily: 'prompt' }}>Close</button>
      </div>
    </div>
  );
};

export default IngredientsModal;
