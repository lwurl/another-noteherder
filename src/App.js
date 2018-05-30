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
            render={() => (
              this.signedIn()
                ? <Redirect to="/notes" />
                : <SignIn />
            )}
          />
          <Route
            path="/notes"
            render={() => (
              this.signedIn()
                ? <Main signOut={this.signOut} uid={this.state.uid} />
                : <Redirect to="/sign-in" />
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
