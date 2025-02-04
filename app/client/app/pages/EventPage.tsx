import React, { useState } from 'react';

interface EventProps {
    id: number;
}
interface EventDetailsProps {
    picture: string;
    name: string;
    date: string;
}
const EventPage: React.FC<EventProps> = ({ id }) => {
    let picture = 'https://via.placeholder.com/300x200';
    let name = 'Event 1';
    let date = '2024-01-01';
    return EventPageDetail({ picture, name, date });
}
const EventPageDetail: React.FC<EventDetailsProps> = ({ picture, name, date }) => {
    const [isInWishlist, setIsInWishlist] = useState(false);

    const handleAddToWishlist = () => {
        setIsInWishlist(!isInWishlist);
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <img src={picture} alt={name} style={{ width: '300px', height: '200px', objectFit: 'cover' }} />
            <h1>{name}</h1>
            <p>{date}</p>
            <button onClick={handleAddToWishlist}>
                {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
        </div>
    );
};

export default EventPage;