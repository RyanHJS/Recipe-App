import React, { useState } from 'react';
import TextInput from './TextInput';
/* label, name, id, value, onChange, resize_or_not */
import UtiltiyButton from '../button/UtiltiyButton';
/* text_color, bg_color, hover_color, onClick, text */

/* Todo: 
1. Setup backend API calls
2. useNavigate and useParams
3. Dynamically change title and add edit + delete buttons
*/

const Form = () => {

    const [currentRecipe, setCurrentRecipe] = useState({
        recipe_name: "",
        recipe_ingredients: "",
        recipe_instructions: "",
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
            recipe_name: "",
            recipe_ingredients: "",
            recipe_instructions: "",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!currentRecipe.recipe_name || !currentRecipe.recipe_ingredients || !currentRecipe.recipe_instructions) {
            setError("Please fill out all fields");
            return;
        }

        setError('');
        console.log(currentRecipe);
    };

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
                        name="recipe_instructions"
                        id="recipe_directions"
                        value={currentRecipe.recipe_instructions}
                        onChange={handleChange}
                        resize_or_not={true}
                    />
                    <div
                        className=''
                    >
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
                            bg_color="bg-blue-500"
                            hover_color="hover:bg-blue-700"
                            width="w-1/4"
                            onClick={handleSubmit}
                            text="Save"
                        />
                    </div>
                </form>

                {error && <p className="mt-2 text-sm text-red-500 text-center">{error}</p>}

            </div>
        </div>
    );
};

export default Form;;