import React, { useState } from 'react';

export const SettingsContext = React.createContext();

export default function SettingsProvider(props) {
    const [title, setTitle] = useState('default site title');
    const [twitter, setTwitter] = useState('test');

    const state = {
        title,
        twitter,
        setTitle,
        setTwitter
    }

    return (
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )
}
