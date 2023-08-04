import React from 'react';
import UtilityCard from '../card/UtilityCard';


const List = ({ recipeList, onDelete, onUpdate }) => {

    return (
        <div
            className='p-5 flex justify-center'
        >
            <div
                className='p-5 border border-gray-500 w-full max-w-lg rounded-lg shadow-md'
            >
                {recipeList.length > 0 &&
                    <h2
                        className='text-left text-3xl font-bold text-gray-700'
                    >
                        Recipe List
                    </h2>
                }
                {recipeList.length === 0 &&
                    <h2
                        className='text-left text-3xl font-bold text-gray-700'
                    >
                        No Recipes Available
                    </h2>
                }
                <ul>
                    {recipeList.map((recipe, index) => (
                        <li key={index}>
                            <UtilityCard
                                recipe={recipe}
                                onDelete={onDelete}
                                onUpdate={onUpdate}
                            />
                        </li>
                    ))}
                </ul>

            </div >
        </div >
    );
};

export default List;;