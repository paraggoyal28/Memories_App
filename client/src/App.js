import React from 'react';
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import { Container } from '@material-ui/core';
import Auth from './components/Auth/Auth';

const App = () => {
    return (
        <BrowserRouter>
            <Container maxwidth="lg">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" component={Auth} />
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;