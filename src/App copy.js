import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import SubTitle from './components/SubTitle';
import Description from './components/Description';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Title />
                <SubTitle />
                <Description />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
