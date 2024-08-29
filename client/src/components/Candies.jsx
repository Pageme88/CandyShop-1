import React from 'react';
import { useNavigate } from 'react-router-dom';
import cartIcon from '../assets/cart-icon.png';

const candies = [
    // Specialty Holiday Candies
    { id: 'pumpkinSpice', name: 'Pumpkin Spice Suckers', pricePerLb: 15.00, description: 'Lollipop-style suckers with a warm, autumnal pumpkin spice flavor, perfect for fall.' },
    { id: 'peppermintBark', name: 'Peppermint Bark Squares', pricePerLb: 20.00, description: 'Rich dark chocolate bark topped with crushed candy canes, ideal for holiday gifting.' },
    { id: 'eggnogHardCandies', name: 'Eggnog Flavored Hard Candies', pricePerLb: 18.00, description: 'Creamy and spiced hard candies capturing the festive essence of eggnog for winter celebrations.' },

    // Hard Candies
    { id: 'fruitJawbreakers', name: 'Fruit Jawbreakers', pricePerLb: 12.00, description: 'Multi-layered jawbreakers in flavors like Strawberry-Banana, Green Apple, and Blueberry.' },
    { id: 'sourRainbowDrops', name: 'Sour Rainbow Drops', pricePerLb: 14.00, description: 'Tangy, colorful hard candies with a burst of sour fruit flavors like Lemon, Lime, and Berry.' },
    { id: 'peppermintDiscs', name: 'Peppermint Discs', pricePerLb: 10.00, description: 'Classic minty hard candies with a refreshing peppermint flavor.' },
    { id: 'butterscotchDiscs', name: 'Butterscotch Discs', pricePerLb: 13.00, description: 'Smooth, buttery hard candies with a rich, caramelized butterscotch flavor.' },
    { id: 'cinnamonFireballs', name: 'Cinnamon Fireballs', pricePerLb: 11.00, description: 'Spicy, cinnamon-flavored hard candies that deliver a warm, fiery kick with every bite.' },

    // Rock Candy Treats
    { id: 'classicRockCandySticks', name: 'Classic Rock Candy Sticks', pricePerLb: 16.00, description: 'Crystallized sugar sticks in vibrant colors and flavors like Blue Raspberry, Cherry, and Lemon Lime.' },
    { id: 'rockCandyCrystals', name: 'Rock Candy Crystals', pricePerLb: 17.00, description: 'Assorted flavors like Cotton Candy, Grape, and Apple, perfect for snacking or adding a touch of sparkle to beverages.' },
    { id: 'sparklingRockCandyCrystals', name: 'Sparkling Rock Candy Crystals', pricePerLb: 19.00, description: 'Iridescent, flavored crystals with unique flavors such as Watermelon Mint and Pineapple Mango.' },

    // Gourmet Chocolates
    { id: 'saltedCaramelTruffles', name: 'Salted Caramel Truffles', pricePerLb: 25.00, description: 'Creamy milk chocolate ganache with a smooth caramel center, finished with a hint of sea salt.' },
    { id: 'matchaGreenTeaBark', name: 'Matcha Green Tea Bark', pricePerLb: 22.00, description: 'White chocolate bark with a vibrant matcha green tea coating, sprinkled with crushed almonds.' },
    { id: 'raspberryRoseTruffles', name: 'Raspberry Rose Truffles', pricePerLb: 24.00, description: 'Delicate dark chocolate ganache infused with raspberry and a touch of rose essence.' },
    { id: 'espressoDelightBars', name: 'Espresso Delight Bars', pricePerLb: 23.00, description: 'Rich milk chocolate with a robust espresso filling, perfect for coffee lovers.' }
];

const MenuPage = () => {
    const navigate = useNavigate();

    const handleDetails = (id) => {
        navigate(`/candy/${id}`);
    };

    const handleOrderClick = () => {
        navigate('/placeorder');
    };

    return (
        <div className="menu-container">
            <header className="header">
                <h1>Sweet Tooth Haven!</h1>
                <nav>
                    <button onClick={() => navigate('/')}>HOME</button>
                    <button onClick={() => navigate('/recipes')}>RECIPES</button>
                    <button onClick={handleOrderClick}>ORDER</button>
                    <img
                        src={cartIcon}
                        alt="Cart"
                        className="cart-icon"
                        onClick={() => navigate('/checkout')}
                    />
                </nav>
            </header>
            <h1>Sweet Tooth Haven </h1>
            <ul className="candy-list">
                {candies.map(candy => (
                    <li key={candy.id} className="candy-item">
                        <h2>{candy.name}</h2>
                        <p>Price: ${candy.pricePerLb.toFixed(2)} per lb</p>
                        <button onClick={() => handleDetails(candy.id)}>Details</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuPage;
