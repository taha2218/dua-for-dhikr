import React, { useState, useEffect } from 'react';
import './UserDetailsDialog.css';
import { getAllCountries } from '../../Actions/ApiActions';

function UserDetailsDialog({ onSave }) {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [countries, setCountries] = useState([]);
    const [touched, setTouched] = useState({ name: false, country: false });

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const countryList = await getAllCountries();
                setCountries(countryList);
            } catch (err) {
                console.error('Error fetching countries:', err);
            }
        };
        fetchCountries();
    }, []);

    const handleSubmit = () => {
        if (name.trim() && country) {
            onSave({ name, country });
        }
    };

    const isNameValid = name.trim().length >= 2;
    const isCountryValid = country !== '';
    const isFormValid = isNameValid && isCountryValid;

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
                        onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                        className="dialog-input"
                        placeholder="Enter your name"
                    />
                    {!isNameValid && touched.name && (
                        <div className="error-text">* Name must be at least 2 characters</div>
                    )}
                </div>

                <div className="dialog-group">
                    <select
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        onBlur={() => setTouched((prev) => ({ ...prev, country: true }))}
                        className="dialog-select"
                    >
                        <option value="">Select Country</option>
                        {countries.map((c) => (
                            <option key={c.code} value={c.code}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                    {!isCountryValid && touched.country && (
                        <div className="error-text">* Please select a country</div>
                    )}
                </div>

                <div className="dialog-buttons">
                    <button
                        className="dialog-btn"
                        onClick={handleSubmit}
                        disabled={!isFormValid}
                        style={{ background: isFormValid ? 'black' : '#ccc', color: isFormValid ? 'white' : '#666' }}
                    >
                        Save
                    </button>
                    <button className="dialog-btn light" onClick={() => { }}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default UserDetailsDialog;
