import React from 'react';

interface ItemProps {
    id: number;
}

interface ItemPageProps {
    name: string;
    price: number;
    onAddToWishlist: () => void;
    onFavorite: () => void;
    onBuyNow: () => void;
}
const ItemPage: React.FC<ItemProps> = ({ id }) => {
    let name = 'Item 1';
    let price = 100;
    const handleAddToWishlist = () => {
        console.log('Added to wishlist');
    };
    const handleFavorite = () => {
        console.log('Favorited');
    };
    const handleBuyNow = () => {
        console.log('Bought now');
    };
    return (
        <ItemDetailsPage name={name} price={price} onAddToWishlist={handleAddToWishlist} onFavorite={handleFavorite} onBuyNow={handleBuyNow} />
    );
}

const ItemDetailsPage: React.FC<ItemPageProps> = ({ name, price, onAddToWishlist, onFavorite, onBuyNow }) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>Price: ${price.toFixed(2)}</p>
            <button onClick={onAddToWishlist}>Add to Wishlist</button>
            <button onClick={onFavorite}>Favorite</button>
            <button onClick={onBuyNow}>Buy Now</button>
        </div>
    );
};

export default ItemPage;