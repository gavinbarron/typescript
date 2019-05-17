import { Component, h } from 'preact';
import { Route, Router, RouterOnChangeArgs } from 'preact-router';

import Home from '../routes/home';
import Profile from '../routes/profile';
import Header from './header';

// eslint-disable-next-line no-undef
if ((module as NodeModule).hot) {
    require('preact/debug');
}

export default class App extends Component {
    public currentUrl?: string;
    public handleRoute = (e: RouterOnChangeArgs): void => {
        this.currentUrl = e.url;
    };

    public render(): JSX.Element {
        return (
            <div id="app">
                <Header />
                <Router onChange={this.handleRoute}>
                    <Route path="/" component={Home} />
                    <Route path="/profile/" component={Profile} user="me" />
                    <Route path="/profile/:user" component={Profile} />
                </Router>
            </div>
        );
    }
}
