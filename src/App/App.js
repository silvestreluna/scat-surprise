import React from 'react';
import firebase from 'firebase/app';

import MyNavBar from '../components/MyNavBar/MyNavBar';
import Home from '../components/Home/Home';
import Auth from '../components/Auth/Auth';
import fbConnection from '../helpers/data/connection';
import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    const loadComponent = () => {
      if (authed) {
        console.error(authed, 'home');
        return <Home />;
      }
      console.error('teting');
      return <Auth />;
    };

    return (
      <div className="App">
        <MyNavBar authed={authed} />
        {loadComponent()}
      </div>
    );
  }
}

export default App;
