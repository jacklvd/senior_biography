import React, { useState } from 'react';

interface Item {
    id: number;
    name: string;
    price: number;
}

const items: Item[] = [
    { id: 1, name: 'Item 1', price: 100 },
    { id: 2, name: 'Item 2', price: 200 },
    { id: 3, name: 'Item 3', price: 300 },
    // Add more items as needed
];

const SearchItemsPage: React.FC = () => {
    const [searchName, setSearchName] = useState('');
    const [minPrice, setMinPrice] = useState<number | ''>('');
    const [maxPrice, setMaxPrice] = useState<number | ''>('');

    const filteredItems = items.filter(item => {
        const matchesName = item.name.toLowerCase().includes(searchName.toLowerCase());
        const matchesMinPrice = minPrice === '' || item.price >= minPrice;
        const matchesMaxPrice = maxPrice === '' || item.price <= maxPrice;
        return matchesName && matchesMinPrice && matchesMaxPrice;
    });

    return (
        <div>
            <h1>Search Items</h1>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        value={searchName}
                        onChange={e => setSearchName(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Min Price:
                    <input
                        type="number"
                        value={minPrice}
                        onChange={e => setMinPrice(e.target.value ? parseInt(e.target.value) : '')}
                    />
                </label>
            </div>
            <div>
                <label>
                    Max Price:
                    <input
                        type="number"
                        value={maxPrice}
                        onChange={e => setMaxPrice(e.target.value ? parseInt(e.target.value) : '')}
                    />
                </label>
            </div>
            <div>
                <h2>Results</h2>
                <ul>
                    {filteredItems.map(item => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SearchItemsPage;