import React, { createContext, useState, useContext } from 'react';

const SessionContext = createContext();

export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({ children }) => {
    const [sessions, setSessions] = useState([]);

    const addSession = (session) => {
        setSessions((prevSessions) => [...prevSessions, session]);
    }

    return (
        <SessionContext.Provider value={{ sessions, addSession }}>
            {children}
        </SessionContext.Provider>
    )
}