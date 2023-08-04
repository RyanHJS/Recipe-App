import './App.css';

import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';

import Form from './components/form/Form';
import Header from './components/layout/Header';
import List from './components/list/List';
import Notify from './components/notifications/Notify';
import server from './utils/constants/server';
import axios from 'axios';

function App() {

  const [recipeList, setRecipeList] = useState([]);
  const [showNofify, setShowNotify] = useState(false);
  const [notifyMessage, setNotifyMessage] = useState('');
  const [notifyColor, setNotifyColor] = useState('bg-green-500');

  const handleSaveRecipe = async (recipe) => {
    console.log(`In App.js, handleSaveRecipe(), recipe: ${recipe.recipe_name}`);
    if (recipe.recipe_name && recipe.recipe_ingredients && recipe.recipe_directions) {
      try {
        const saveRecipe_url = server.url + "/recipes";
        const saveRecipe_response = await axios.post(saveRecipe_url, recipe);
        console.log(`saveRecipe_response.data: ${saveRecipe_response.data}`);

        const getRecipes_url = server.url + "/recipes";
        const getRecipes_response = await axios.get(getRecipes_url);
        setRecipeList(getRecipes_response.data);

        setShowNotify(true);
        setNotifyMessage('Recipe saved successfully!');
        setNotifyColor('bg-blue-500');
        setTimeout(() => { setShowNotify(false); }, 3000);

      } catch (err) {
        console.error(err.message);
      }
    }
  };

  const handleDeleteRecipe = async (id) => {
    console.log(`In App.js, handleDeleteRecipe(), id: ${id}`);
    try {
      const deleteRecipe_url = server.url + "/recipes/" + id;
      const deleteRecipe_response = await axios.delete(deleteRecipe_url);
      console.log(`deleteRecipe_response.data: ${deleteRecipe_response.data}`);

      const getRecipes_url = server.url + "/recipes";
      const getRecipes_response = await axios.get(getRecipes_url);
      setRecipeList(getRecipes_response.data);

      setShowNotify(true);
      setNotifyMessage('Recipe deleted successfully!');
      setNotifyColor('bg-red-500');
      setTimeout(() => { setShowNotify(false); }, 3000);

    } catch (err) {
      console.error(err.message);
    }
  };

  const handleUpdateRecipe = async (id, recipe) => {
    console.log(`In App.js, handleUpdateRecipe(), id: ${id}, recipe: ${recipe.recipe_name}`);
    try {
      const updateRecipe_url = server.url + "/recipes/" + id;
      const updateRecipe_response = await axios.put(updateRecipe_url, recipe);
      console.log(`updateRecipe_response.data: ${updateRecipe_response.data}`);

      const getRecipes_url = server.url + "/recipes";
      const getRecipes_response = await axios.get(getRecipes_url);
      setRecipeList(getRecipes_response.data);

      setShowNotify(true);
      setNotifyMessage('Recipe updated successfully!');
      setNotifyColor('bg-green-500');
      setTimeout(() => { setShowNotify(false); }, 3000);

    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const getRecipes_url = server.url + "/recipes";
        // console.log(`In App.js, getRecipes(), getRecipes_url: ${getRecipes_url}`);
        const getRecipes_response = await axios.get(getRecipes_url);
        // console.log(`In App.js, getRecipes(), getRecipes_response.data: ${getRecipes_response}`);
        setRecipeList(getRecipes_response.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    getRecipes();
  }, []);

  return (
    <div className="App">
      <Header />
      {showNofify &&
        <Notify
          message={notifyMessage}
          backgroundColor={notifyColor}
        />}

      <Routes>
        <Route path="/" element={
          <Form onSave={handleSaveRecipe} />
        } />
        <Route path="/recipes" element={
          <List recipeList={recipeList} onDelete={handleDeleteRecipe} onUpdate={handleUpdateRecipe} />
        } />
        <Route path="/recipes/:recipeID/edit" element={
          <Form onSave={handleUpdateRecipe} onDelete={handleDeleteRecipe} onUpdate={handleUpdateRecipe} />
        } />
      </Routes>
    </div>
  );
};

export default App;
