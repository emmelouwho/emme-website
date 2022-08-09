import './App.scss';
import AboutMe from './aboutMe';
import Resume from './resume';
import Home from './home';
import Header from './header';
import Footer from './footer';
import { Route, Switch, Redirect } from 'react-router-dom';

//how to get base for paths

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/about-me">
                    <AboutMe />
                </Route>
                <Route path="/resume">
                    <Resume />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
