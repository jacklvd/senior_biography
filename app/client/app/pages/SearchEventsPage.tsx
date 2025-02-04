import React, { useState } from 'react';

const SearchEventsPage: React.FC = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    const handleSearch = () => {
        // Implement search logic here
        console.log(`Searching for events with name: ${name} and date: ${date}`);
    };

    return (
        <div>
            <h1>Search Events</h1>
            <div>
                <label>
                    Event Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Event Date:
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>
            </div>
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchEventsPage;