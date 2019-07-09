import React from 'react';
import PropTypes from 'prop-types';
import scatsShape from '../../helpers/propz/scatsShape';

class ScatCard extends React.Component {
  static propTypes = {
    scat: scatsShape.scatsShape,
    deleteScat: PropTypes.func.isRequired,
  }

  deleteMe = (e) => {
    e.preventDefault();
    const { scat, deleteScat } = this.props;
    deleteScat(scat.id);
  }

  render() {
    const { scat } = this.props;
    return (
      <div className="ScatCard col-4">
        <div className="card border-0 shadow">
            <div className="card-body">
              <h5 className="card-title">{scat.sampleName}</h5>
              <p className="card-text">{scat.location}</p>
              <button className="btn btn-outline-danger" onClick={this.deleteMe}>Delete</button>
            </div>
          </div>
        </div>
    );
  }
}

export default ScatCard;
