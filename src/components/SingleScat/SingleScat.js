import React from 'react';

import './SingleScat.scss';
import getScatsData from '../../helpers/data/getScatsData';

class SingleScat extends React.Component {
  state = {
    scat: {},
  }

  componentDidMount() {
    const scatId = this.props.match.params.id;
    getScatsData.getSingleScat(scatId)
      .then(scatPromise => this.setState({ scat: scatPromise.data }))
      .catch(err => console.error(err, 'Unable to get Scat'));
  }

  deleteScat = () => {
    const scatId = this.props.match.params.id;
    getScatsData.deleteScat(scatId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error(err, 'Unable to delete'));
  }

  render() {
    const { scat } = this.state;
    return (
      <div className="SingleScat">
        <h2>{scat.sampleName}</h2>
        <h2>{scat.location}</h2>
        <h3>{scat.animal}</h3>
        <h4>{scat.color}</h4>
        <h5>{scat.weight}</h5>
        <button className="btn btn-outline-danger" onClick={this.deleteScat}>Delete</button>
      </div>
    );
  }
}

export default SingleScat;
