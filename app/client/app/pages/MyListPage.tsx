import React from 'react';

const MyListPage: React.FC = () => {
    const favoriteEvents = [
        'Event 1',
        'Event 2',
        'Event 3'
    ];

    const favoriteItems = [
        'Item 1',
        'Item 2',
        'Item 3'
    ];

    return (
        <div>
            <h1>My Favorite Events</h1>
            <ul>
                {favoriteEvents.map((event, index) => (
                    <li key={index}>{event}</li>
                ))}
            </ul>

            <h1>My Favorite Items</h1>
            <ul>
                {favoriteItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default MyListPage;