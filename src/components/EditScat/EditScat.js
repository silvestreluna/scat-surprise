import React from 'react';

import './EditScat.scss';

class EditScat extends React.Component {
  render() {
    const editId = this.props.match.params.id;
    return (
      <div className="EditScat">
        <h1>EditScat</h1>
        <h2>The EditId is: {editId}</h2>
      </div>
    );
  }
}

export default EditScat;
