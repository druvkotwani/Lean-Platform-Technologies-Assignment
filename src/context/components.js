import React, { useState, createContext } from 'react';

export const SelectedValuesContext = createContext();

export function SelectedValuesProvider({ children }) {
    const [selectedValues, setSelectedValues] = useState({
        issue: false,
        feedback: false,
        suggestion: false,
        contact: false
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setSelectedValues({
            ...selectedValues,
            [name]: checked
        });
    };

    return (
        <SelectedValuesContext.Provider value={{ selectedValues, setSelectedValues, handleCheckboxChange }}>
            {children}
        </SelectedValuesContext.Provider>
    );
}