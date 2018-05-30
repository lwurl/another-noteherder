import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import "./App.css"
import Main from './Main';
import SignIn from './SignIn';
import { auth } from './base';


class App extends Component {
    state = {
        uid: null,
    }

    componentWillMount() {
        auth.onAuthStateChanged(
            (user) => {
                if (user) {
                    this.handleAuth(user);
                } else {
                    this.handleUnauth();
                }
            }
        )
    }

    handleUnauth = () => {
        this.setState({ uid: null });
    }

    handleAuth = (user) => {
        this.setState({ uid: user.uid });
    }

    signOut = () => {
        auth.signOut();
    }

    signedIn = () => {
        return this.state.uid;
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route
                        path="/sign-in"
                        render={navProps => (
                            this.signedIn()
                                ? <Redirect to="/notes" />
                                : <SignIn {...navProps}/>
                        )}
                    />
                    <Route
                        path="/notes"
                        render={navProps => (
                            this.signedIn()
                            ? <Main
                                signOut={this.signOut}
                                uid={this.state.uid}
                                {...navProps}
                            />
                                : <Redirect to="/sign-in" />
                        )}
                    />
                    <Route render={() => (
                        this.signedIn()
                            ? <Redirect to="/notes" />
                            : <Redirect to="/signed-in" />
                    )}
                    />
                </Switch>
                {
                    // this.signedIn()
                    // ? <Main signOut={this.signOut} uid={this.state.uid}/> 
                    // : <SignIn />
                }
            </div>
        );
    }
}

export default App;
