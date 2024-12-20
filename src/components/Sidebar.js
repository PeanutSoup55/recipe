import React, { useState, useEffect } from 'react';
import { auth, db } from '../config/firebase';
import { getDocs, collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import './Sidebar.css';
import Nav from './nav';
import { FaTrash } from 'react-icons/fa';

const Sidebar = () => {


  //this is sidebar code
  
  const [recipes, setRecipes] = useState([]);
  const recipeCollection = collection(db, "recipes");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      const user = auth.currentUser;
      if (user){
        try {
          const querySnapshot = await getDocs(recipeCollection);
          const recipesData = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
          setRecipes(recipesData);
        } catch (error) {
          console.error("Error fetching recipes: ", error);
        }
      } else {
        setError('User  not signed in.');
    }

    };

    fetchRecipes();
  }, []);


  //this is main view code (idk why i called this class sidebar)


  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(recipeCollection, id));
      setRecipes(recipes.filter(recipe => recipe.id !== id));
      if (selectedRecipe && selectedRecipe.id === id) {
        setSelectedRecipe(null); // Clear selected recipe if deleted
      }
    } catch (error) {
      console.error("Error deleting recipe: ", error);
    }
  };

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };



  return (
    <div className="uhg">
      <Nav />
         <div className="container">
      <div className="sidebar">
        <h2>Recipe List</h2>
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id} onClick={() => handleSelectRecipe(recipe)}>
              {recipe.name}
              <button onClick={() => handleDelete(recipe.id)}><FaTrash /></button>

            </li>
          ))}
        </ul>
      </div>
      
      <div className="recipe-details">
        {selectedRecipe ? (
          <div>
            <h2>{selectedRecipe.name}</h2>
            <h3>Ingredients:</h3>
            <ul>
              {selectedRecipe.ingredients.map((ingredients, index) => (
                <li key={index}>{ingredients}</li>
              ))}
            </ul>
            <h3>Instructions:</h3>
            <ol>
              {selectedRecipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
            
          </div>
        ) : (
          <p>Select a recipe to see the details.</p>
        )}
      </div>
    
    </div>
    </div>
 

  );
};

export default Sidebar;