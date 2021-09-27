import React from 'react';
import './app.css';
import Main from './components/main';
import SettingsProvider from './context/site';
import ThemeProvider from './context/theme';

export default class App extends React.Component {
    render() {
        return (
            <ThemeProvider>
                <SettingsProvider>
                    <Main />
                </SettingsProvider>
            </ThemeProvider>

            // <ThisComponentNotDontHaveAccessToContenxt />
        )
    }
}