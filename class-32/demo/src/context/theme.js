import React from 'react';

export const ThemeContext = React.createContext();

export default function ThemeProvider(props) {
    const [mode, setMode] = React.useState('light');

    const toggleMode = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    }

    const state = {
        mode,
        toggleMode
    }

    return (
        <ThemeContext.Provider value={state}>
            {props.children}
        </ThemeContext.Provider>
    );
}

// export default class ThemeProvider extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             mode: 'dark',
//             toggleMode: this.toggleMode
//         }
//     }

//     toggleMode = () => {
//         this.setState(
//             { mode: this.state.mode === 'dark' ? 'light' : 'dark' }
//         );
//     }

//     render() {
//         return (
//             <ThemeContext.Provider value={this.state}>
//                 {this.props.children}
//             </ThemeContext.Provider>
//         )
//     }
// }
