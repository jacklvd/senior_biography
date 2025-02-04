"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';



const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>Welcome to Our App</h1>
                <p>Your journey starts here.</p>
                <button onClick={handleLogin} style={styles.button}>Login</button>
            </header>
            <main style={styles.main}>
                <section style={styles.section}>
                    <h2>About Us</h2>
                    <p>We are dedicated to providing the best service.</p>
                </section>
                <section style={styles.section}>
                    <h2>Features</h2>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                </section>
            </main>
            <footer style={styles.footer}>
                <p>&copy; 2024 Our App. All rights reserved.</p>
            </footer>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center' as const,
        padding: '20px',
    },
    header: {
        backgroundColor: '#282c34',
        padding: '20px',
        color: 'white',
    },
    main: {
        margin: '20px 0',
    },
    section: {
        margin: '20px 0',
    },
    footer: {
        marginTop: '20px',
        padding: '10px',
        borderTop: '1px solid #ccc',
    },
    button: {
        marginTop: '10px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default LandingPage;
