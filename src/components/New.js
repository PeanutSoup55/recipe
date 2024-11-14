import React from 'react';
import './New.css';
import Nav from './nav';
import { getDocs, collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db, auth } from '../config/firebase';

const New = () => {

  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [instructions, setInstructions] = useState(['']);

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };
  const handleInstructionChange = (index, value) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const removeIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  const addInstruction = () => {
    setInstructions([...instructions, '']);
  };

  const removeInstruction = (index) => {
    const newInstructions = instructions.filter((_, i) => i !== index);
    setInstructions(newInstructions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create a recipe object
    const recipe = {
      
      ingredients: ingredients,
      instructions: instructions,
      name: name,
    };

    // Save the recipe to Firebase
    try {
      // Use addDoc with the collection reference
      await addDoc(collection(db, 'recipes'), recipe);
      setName('');
      setIngredients(['']);
      setInstructions(['']);
      console.log('Recipe added successfully');
    } catch (error) {
      console.error('Error adding recipe: ', error.message);
      alert('Error adding recipe: ' + error.message);
    }
  };



  return (
    <div>
      <Nav />
      <div className="new-recipe-container">
        <form onSubmit={handleSubmit}>
          <div className='name'>
            <label>Recipe Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className='ingredients'>
            <label>Ingredients:</label>
            {ingredients.map((ingredient, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(index, e.target.value)}
                  required
                />
                <button type="button" onClick={() => removeIngredient(index)}>
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={addIngredient}>
              Add Ingredient
            </button>
          </div>

          <div className='instructions'>
            <label>Instructions:</label>
            {instructions.map((instruction, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={instruction}
                  onChange={(e) => handleInstructionChange(index, e.target.value)}
                  required
                />
                <button type="button" onClick={() => removeInstruction(index)}>
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={addInstruction}>
              Add Instruction
            </button>
          </div>
          <button type="submit">Submit Recipe</button>
        </form>
      </div>
    </div>
            
  );


};
export default New;