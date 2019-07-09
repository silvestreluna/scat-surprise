import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
// import { Link } from 'react-router-dom';
import getScatsData from '../../helpers/data/getScatsData';

import ScatCard from '../ScatCard/ScatCard';

import './Home.scss';

class Home extends React.Component {
  state = {
    scats: [],
  }

  editEvent = (e) => {
    e.preventDefault();
    const orderId = '12345';
    this.props.history.push(`/edit/${orderId}`);
  };

  componentDidMount() {
    const { uid } = firebase.auth().currentUser;
    getScatsData.getScatsData(uid)
      .then(scats => this.setState({ scats }))
      .catch(err => console.error(err));
  }

  render() {
    // const singleLink = '/scat/12345';
    const makeScatCards = this.state.scats.map(scat => (
      <ScatCard
      key={scat.id}
      scat={scat}/>
    ));
    return (
      <div className="Home col">
        <h1>Home</h1>
        <div className="d-flex">
        {makeScatCards}
        </div>
        {/* <button className="btn btn-danger" onClick={this.editEvent}>Edit a thing</button> */}
        {/* <Link to={singleLink}>View Single</Link> */}
      </div>
    );
  }
}

export default Home;
