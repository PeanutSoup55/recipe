import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { getDocs, collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import './Sidebar.css';

const Sidebar = () => {


  const [recipes, setRecipes] = useState([]);
  const recipeCollection = collection(db, "recipes");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const querySnapshot = await getDocs(recipeCollection);
        const recipesData = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data(),}));
        setRecipes(recipesData);
      } catch (error) {
        console.error("Error fetching recipes: ", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="sidebar">
      <h2>Recipe List</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            {recipe.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;