import React from 'react';
import UtilityCard from '../card/UtilityCard';


const List = () => {

    // const recipeList = [];
    const recipeList = [
        {
            recipe_name: "Spaghetti Carbonara",
            recipe_ingredients: "Spaghetti, Eggs, Parmesan Cheese, Guanciale, Salt, Black Pepper",
            recipe_instructions: "Cook spaghetti. Meanwhile, combine eggs and parmesan. Sauté guanciale, then mix with cooked spaghetti off the heat. Mix in egg-parmesan mixture to create a creamy sauce. Season with salt and black pepper."
        },
        {
            recipe_name: "Chicken Curry",
            recipe_ingredients: "Chicken, Curry Powder, Onions, Garlic, Tomatoes, Vegetable Oil, Salt",
            recipe_instructions: "Heat oil, sauté onions and garlic. Add chicken, cook until browned. Add tomatoes and curry powder. Simmer until chicken is cooked through. Season with salt."
        },
        {
            recipe_name: "Vegetable Stir-fry",
            recipe_ingredients: "Broccoli, Carrots, Bell Peppers, Soy Sauce, Garlic, Vegetable Oil",
            recipe_instructions: "Heat oil, sauté garlic. Add vegetables, stir fry until tender-crisp. Add soy sauce, stir well."
        },
        // ...add more recipes as needed
    ];

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
                            />
                        </li>
                    ))}
                </ul>

            </div >
        </div >
    );
};

export default List;;