import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
    const singleLink = `/scat/${scat.id}`;
    const editLink = `/edit/${scat.id}`;
    return (
      <div className="ScatCard col-4">
        <div className="card border-0 shadow">
            <div className="card-body">
              <h5 className="card-title">{scat.sampleName}</h5>
              <Link className="btn btn-outline-success" to={singleLink}>View</Link>
              <p className="card-text">{scat.location}</p>
              <Link className="btn btn-outline-primary" to={editLink}>Edit</Link>
              <button className="btn btn-outline-danger" onClick={this.deleteMe}>Delete</button>
            </div>
          </div>
        </div>
    );
  }
}

export default ScatCard;
