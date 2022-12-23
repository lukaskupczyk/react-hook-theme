import { Toggle } from 'react-hook-theme';
import 'react-hook-theme/dist/styles/style.css';
import './App.css';
import logo from './logo.svg';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Toggle />
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
