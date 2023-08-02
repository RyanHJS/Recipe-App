import { useState } from 'react';
import UtiltiyButton from '../button/UtiltiyButton';

const UtilityCard = ({ recipe }) => {
    const [expanded, setExpanded] = useState(false);
    const [editing, setEditing] = useState(false);

    const handleEdit = (e) => {
        console.log('In UtiltiyCard... Editing');
        setEditing(true);
    };

    const handleCancelEdit = (e) => {
        console.log('In UtiltiyCard... Cancel Editing');
        setEditing(false);
    };

    const handleDelete = (e) => {
        console.log('In UtiltiyCard... Deleting');
    };

    const handleUpdate = (e) => {
        console.log('In UtiltiyCard... Updating');
    };

    const handleClick = (e) => {
        setExpanded(!expanded);
    };

    return (
        <div
            className="p-5 my-5 border border-gray-500 w-full max-w-lg rounded-lg shadow-md
            cursor-pointer hover:bg-gray-50"
            onClick={handleClick}
        >
            <div
                className='font-bold'
            >
                <h2>
                    Recipe Name: {recipe.recipe_name}
                </h2>
            </div>
            <div
                className=''
            >
                {expanded &&
                    <div
                        className='m-5 text-start'
                    >
                        <h3
                            className='font-bold my-2'
                        >Ingredients:</h3>
                        <p>{recipe.recipe_ingredients}</p>
                        <h3
                            className='font-bold my-2'
                        >Directions:</h3>
                        <p>{recipe.recipe_instructions}</p>
                        <div
                            className='flex justify-center p-5'
                        >
                            <UtiltiyButton
                                text_color="text-white"
                                bg_color="bg-gray-500"
                                hover_color="hover:bg-gray-700"
                                width="w-1/4"
                                onClick={null}
                                text="Reset"
                            />
                            <UtiltiyButton
                                text_color="text-white"
                                bg_color="bg-blue-500"
                                hover_color="hover:bg-blue-700"
                                width="w-1/4"
                                onClick={null}
                                text="Save"
                            />
                            <UtiltiyButton
                                text_color="text-white"
                                bg_color="bg-green-500"
                                hover_color="hover:bg-green-700"
                                width="w-1/4"
                                onClick={null}
                                text="Edit"
                            />
                            <UtiltiyButton
                                text_color="text-white"
                                bg_color="bg-red-500"
                                hover_color="hover:bg-red-700"
                                width="w-1/4"
                                onClick={null}
                                text="Delete"
                            />
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default UtilityCard;
