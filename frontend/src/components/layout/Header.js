import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-300 p-5">
            <nav className='flex justify-center items-center'>
                <ul className='flex space-x-5 font-medium'>
                    <li>
                        <Link
                            to="/"
                            className="px-4 py-5 bg-blue-500 text-white rounded-md hover:bg-green-600">
                            Create Recipe
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/recipes"
                            className="px-4 py-5 bg-blue-500 text-white rounded-md hover:bg-green-600">
                            Create Recipe
                        </Link>
                    </li>
                </ul>

            </nav>
        </header>
    );
};

export default Header;