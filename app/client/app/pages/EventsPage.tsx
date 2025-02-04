import React, { useState } from 'react';

interface Event {
    id: number;
    title: string;
    description: string;
    date: string;
}

const eventsData: Event[] = [
    { id: 1, title: 'Event 1', description: 'Description for event 1', date: '2024-01-01' },
    { id: 2, title: 'Event 2', description: 'Description for event 2', date: '2024-02-01' },
    // Add more events here
];

const EventsPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredEvents = eventsData.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Events</h1>
            <input
                type="text"
                placeholder="Search events"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                {filteredEvents.map(event => (
                    <div key={event.id} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
                        <h2>{event.title}</h2>
                        <p>{event.description}</p>
                        <p>{event.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsPage;