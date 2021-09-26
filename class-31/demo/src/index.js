import ReactDOM from 'react-dom';
import App from './app';

function Main() {
    return (
        <>
            <App />
        </>
    );
}

const root = document.getElementById('root');
ReactDOM.render(<Main />, root);
