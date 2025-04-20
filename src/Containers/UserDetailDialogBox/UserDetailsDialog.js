import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserDetailsDialog.css';

function UserDetailsDialog({ onSave }) {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                const countryList = response.data
                    .map((c) => ({
                        code: c.cca2,
                        name: c.name.common
                    }))
                    .sort((a, b) => a.name.localeCompare(b.name)); // sort alphabetically
                setCountries(countryList);
            } catch (err) {
                console.error('Error fetching countries:', err);
            }
        };

        fetchCountries();
    }, []);

    const handleSubmit = () => {
        if (name && country) {
            onSave({ name, country });
        }
    };

    return (
        <div className="user-dialog-overlay">
            <div className="user-dialog">
                <h2 className="dialog-title">السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</h2>

                <div className="dialog-group">
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="dialog-input"
                        placeholder="Enter your name"
                    />
                </div>

                <div className="dialog-group">
                    <select
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="dialog-select"
                    >
                        <option value="">Select Country</option>
                        {countries.map((c) => (
                            <option key={c.code} value={c.code}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='dialog-buttons'>
                    <button className="dialog-btn" onClick={handleSubmit}>Save</button>
                    <button className="dialog-btn light" onClick={handleSubmit}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default UserDetailsDialog;
