import React, { createContext, useState, useEffect } from 'react';
import { handleGetSubmit } from '../apiFunctions/handleGet'; // import your GET function

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    
    const [isLoading, setIsLoading] = useState(true); // To handle loading state

    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true); // Start loading
            try {
                const data = await handleGetSubmit('users');
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
                // Handle error state as well, if necessary
            }
            setIsLoading(false); // End loading
        };

        fetchUsers();
    }, []);

    // You might pass isLoading to your context as well
    return (
        <UserContext.Provider value={{ users, setUsers, isLoading }}>
            {children}
        </UserContext.Provider>
    );
};
