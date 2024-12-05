import React, { createContext, useState, useEffect } from 'react';

// Création du contexte
export const PropertiesContext = createContext();

// Fournisseur du contexte
export const PropertiesProvider = ({ children }) => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/properties')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement des données');
                }
                return response.json();
            })
            .then((data) => {
                setProperties(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <PropertiesContext.Provider value={{ properties, loading, error }}>
            {children}
        </PropertiesContext.Provider>
    );
};