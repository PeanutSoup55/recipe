// components/RecipeView.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import { getDocs, collection, addDoc, deleteDoc, doc } from 'firebase/firestore';

const RecipeView = () => {

  return (
    <div className="recipe-view">

    </div>
  );
};

export default RecipeView;