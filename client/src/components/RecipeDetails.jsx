import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import  recipes  from './Recipes.jsx';
import cartIcon from '../assets/cart-icon.png';

const RecipeDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const recipe = recipes.find(recipe => recipe.id === id);

    if (!recipes) {
        return <p>Recipe not found</p>;
    }

    const { name, ingredients, directions } = recipe;

    const handleOrderClick = () => {
        navigate('/placeorder');
    };


    return (
        <div className="recipe-details-container">
            <header className="header">
                <h1>Sweet Tooth Haven!</h1>
                <nav>
                    <button onClick={() => navigate('/candyshop')}>HOME</button>
                    <button onClick={() => navigate('/candies')}>CANDIES</button>
                    <button onClick={handleOrderClick}>ORDER</button>
                    <img
                        src={cartIcon}
                        alt="Cart"
                        className="cart-icon"
                        onClick={() => navigate('/checkout')}
                    />
                </nav>
            </header>
            <div className="recipe-details">
                <h1>{name}</h1>
                <h2>Ingredients:</h2>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h2>Directions:</h2>
                <ol>
                    {directions.map((direction, index) => (
                        <li key={index}>{direction}</li>
                    ))}
                </ol>
                <button onClick={handleOrderClick}>Add to Order</button>
            </div>
        </div>
    );
};

export default RecipeDetails;
