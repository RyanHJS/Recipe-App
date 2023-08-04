import { useEffect, useState } from 'react';
import UtiltiyButton from '../button/UtiltiyButton';
import { useNavigate } from 'react-router-dom';

const UtilityCard = ({ recipe, onDelete, onUpdate }) => {
    const [expanded, setExpanded] = useState(false);
    const [editing, setEditing] = useState(false);
    const [lastEdited, setLastEdited] = useState('');

    const navigate = useNavigate();

    const handleEdit = (e) => {
        console.log('In UtiltiyCard... Editing');
        setEditing(true);
        setLastEdited(recipe);
        navigate(`/recipes/${recipe.recipe_id}/edit`);
    };

    const handleCancelEdit = (e) => {
        console.log('In UtiltiyCard... Cancel Editing');
        setEditing(false);
    };

    const handleDelete = (e) => {
        console.log('In UtiltiyCard... Deleting');
        onDelete(recipe.recipe_id);
    };

    const handleUpdate = (e) => {
        console.log('In UtiltiyCard... Updating');
        onUpdate(recipe.recipe_id, recipe);
    };

    const handleClick = (e) => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        let date = new Date(recipe.recipe_last_edited);
        let formatted_date = date.toLocaleString();
        setLastEdited(formatted_date);
    }, [recipe]);

    useEffect(() => {
        let date = new Date(recipe.recipe_last_edited);

        // Apply timezone offset to get local date time
        let offset = date.getTimezoneOffset();
        date = new Date(date.getTime() - (offset * 60 * 1000));

        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        let am_pm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        let formatted_date = `${month}-${day}-${year} ${hours}:${minutes}:${seconds} ${am_pm}`;
        setLastEdited(formatted_date);
    }, [recipe]);


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
                        >Last Edited:</h3>
                        <p>{lastEdited}</p>
                        <h3
                            className='font-bold my-2'
                        >Ingredients:</h3>
                        <p>{recipe.recipe_ingredients}</p>
                        <h3
                            className='font-bold my-2'
                        >Directions:</h3>
                        <p>{recipe.recipe_directions}</p>
                        <div
                            className='flex justify-center p-5'
                        >
                            <UtiltiyButton
                                text_color="text-white"
                                bg_color="bg-green-500"
                                hover_color="hover:bg-green-700"
                                width="w-1/4"
                                onClick={handleEdit}
                                text="Edit"
                            />
                            <UtiltiyButton
                                text_color="text-white"
                                bg_color="bg-red-500"
                                hover_color="hover:bg-red-700"
                                width="w-1/4"
                                onClick={handleDelete}
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
