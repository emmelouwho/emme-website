import header from './images/header.svg'
import './App.scss';
import Tabs from './headerTabs';

function App() {
    return (
        <div className="App">
            <img src={header} className="header-svg" alt="header" />
            <Tabs/>
        </div>
    );
}

export default App;
