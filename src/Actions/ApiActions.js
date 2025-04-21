import axios from 'axios';

export const getAllCountries = async () => {
    const response = await axios.get('https://countriesnow.space/api/v0.1/countries/positions');
    return response.data.data.map((c) => ({
        code: c.iso2,
        name: c.name,
    })).sort((a, b) => a.name.localeCompare(b.name));
};
