import React, { Component } from 'react';

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
          this.handleAuth();
        } else {
          this.handleUnauth();
        }
      }
    )
  }

  handleUnauth = () => {
    this.setState({ uid: null });
  }

  handleAuth = () => {
    this.setState({ uid: 'lwurl' });
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
        { 
            this.signedIn()
            ? <Main signOut={this.signOut}/> 
            : <SignIn />
        }
      </div>
    );
  }
}

export default App;
