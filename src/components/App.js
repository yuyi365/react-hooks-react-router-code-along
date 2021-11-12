import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import About from './About';
import Login from './Login';
import NavBar from './NavBar';

// Route --> depends on the prop, but "when URL matches specified path, render child component"
// ** important to put the "Home" at the end
// use "exact" path

const App = () => {

    return (
        <div>
            <NavBar />

            <Switch>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route>
                <SignUp exact path="/signup"/>
            </Route>
            <Route>
                <Messages exact path="/messages"/>
            </Route>
            <Route exact path="/">
                <Home />
            </Route>

            </Switch>
        </div>
    )
}

export default App
