import React, { useEffect, useState } from 'react';
import TextInput from './TextInput';
/* label, name, id, value, onChange, resize_or_not */
import UtiltiyButton from '../button/UtiltiyButton';
/* text_color, bg_color, hover_color, onClick, text */
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import server from '../../utils/constants/server';


const Form = ({ onSave, onDelete, onUpdate }) => {

    let { recipeID } = useParams();
    const navigate = useNavigate();

    const [currentRecipe, setCurrentRecipe] = useState({
        recipe_name: "",
        recipe_ingredients: "",
        recipe_directions: "",
    });

    const [title, setTitle] = useState("New Recipe");
    const [error, setError] = useState('');
    const [editing, setEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentRecipe((prevRecipe) => ({
            ...prevRecipe,
            [name]: value,
        }));
    };

    const handleReset = (e) => {
        e.preventDefault();
        setCurrentRecipe({
            recipe_name: currentRecipe.recipe_name || "",
            recipe_ingredients: currentRecipe.recipe_ingredients || "",
            recipe_directions: currentRecipe.recipe_directions || "",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!currentRecipe.recipe_name || !currentRecipe.recipe_ingredients || !currentRecipe.recipe_directions) {
            setError("Please fill out all fields");
            return;
        }

        setError('');
        onSave(currentRecipe);
        console.log(`In Form.js, handleSubmit(), currentRecipe: 
        name: ${currentRecipe.recipe_name}, ingredients: ${currentRecipe.recipe_ingredients}, directions: ${currentRecipe.recipe_directions}`);

        setTimeout(() => {
            navigate('/recipes');
        }, 2000);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        onDelete(recipeID);

        setTimeout(() => {
            navigate('/recipes');
        }, 2000);
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        if (!currentRecipe.recipe_name || !currentRecipe.recipe_ingredients || !currentRecipe.recipe_directions) {
            setError("Please fill out all fields");
            return;
        }
        setError('');
        onUpdate(recipeID, currentRecipe);

        setTimeout(() => {
            navigate('/recipes');
        }, 2000);
    };

    const handleReturn = (e) => {
        e.preventDefault();
        navigate('/recipes');
    };

    useEffect(() => {
        console.log(`In Form.js, useEffect(), recipeID: ${recipeID}`);
        const fetchRecipe = async () => {
            if (recipeID) {
                setTitle("Edit Recipe");
                setEditing(true);

                try {
                    const getRecipe_url = server.url + "/recipes/" + recipeID;
                    const getRecipe_response = await axios.get(getRecipe_url);
                    const fetchedRecipe = getRecipe_response.data[0];
                    setCurrentRecipe({
                        recipe_name: fetchedRecipe.recipe_name,
                        recipe_ingredients: fetchedRecipe.recipe_ingredients,
                        recipe_directions: fetchedRecipe.recipe_directions,
                    });
                } catch (err) {
                    console.error(err.message);
                }
            }
        };
        fetchRecipe();
    }, [recipeID]);

    return (
        <div
            className='
            p-5 
            flex
            justify-center
            '
        >
            <div
                className='p-5 border border-gray-500 w-full max-w-lg rounded-lg shadow-md'
            >
                <h2
                    className='text-left text-3xl font-bold text-gray-700'
                >
                    {title}
                </h2>
                <form>
                    <TextInput
                        label="Recipe Name"
                        name="recipe_name"
                        id="recipe_name"
                        value={currentRecipe.recipe_name}
                        onChange={(handleChange)}
                        resize_or_not={false}
                    />
                    <TextInput
                        label="Ingredients"
                        name="recipe_ingredients"
                        id="recipe_ingredients"
                        value={currentRecipe.recipe_ingredients}
                        onChange={handleChange}
                        resize_or_not={true}
                    />
                    <TextInput
                        label="Directions"
                        name="recipe_directions"
                        id="recipe_directions"
                        value={currentRecipe.recipe_directions}
                        onChange={handleChange}
                        resize_or_not={true}
                    />
                    <div>
                        {editing && (
                            <>
                                <UtiltiyButton
                                    text_color="text-white"
                                    bg_color="bg-gray-500"
                                    hover_color="hover:bg-gray-700"
                                    width="w-1/6"
                                    onClick={handleReturn}
                                    text="Return"
                                />
                                <UtiltiyButton
                                    text_color="text-white"
                                    bg_color="bg-gray-500"
                                    hover_color="hover:bg-gray-700"
                                    width="w-1/6"
                                    onClick={handleReset}
                                    text="Reset"
                                />
                                <UtiltiyButton
                                    text_color="text-white"
                                    bg_color="bg-green-500"
                                    hover_color="hover:bg-green-700"
                                    width="w-1/6"
                                    onClick={handleUpdate}
                                    text="Update"
                                />
                                <UtiltiyButton
                                    text_color="text-white"
                                    bg_color="bg-red-500"
                                    hover_color="hover:bg-red-700"
                                    width="w-1/6"
                                    onClick={handleDelete}
                                    text="Delete"
                                />
                            </>
                        )}
                        {!editing && (
                            <>
                                <UtiltiyButton
                                    text_color="text-white"
                                    bg_color="bg-gray-500"
                                    hover_color="hover:bg-gray-700"
                                    width="w-1/4"
                                    onClick={handleReturn}
                                    text="Return"
                                />
                                <UtiltiyButton
                                    text_color="text-white"
                                    bg_color="bg-gray-500"
                                    hover_color="hover:bg-gray-700"
                                    width="w-1/4"
                                    onClick={handleReset}
                                    text="Reset"
                                />
                                <UtiltiyButton
                                    text_color="text-white"
                                    bg_color="bg-green-500"
                                    hover_color="hover:bg-green-700"
                                    width="w-1/4"
                                    onClick={handleSubmit}
                                    text="Save"
                                />
                            </>
                        )}
                    </div>
                </form>

                {error && <p className="mt-2 text-sm text-red-500 text-center">{error}</p>}

            </div>
        </div>
    );
};

export default Form;;