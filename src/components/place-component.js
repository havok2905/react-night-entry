import React from 'react';
import Map from './map-component';

class Place extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <p><strong>{ this.props.place.name }</strong></p>
        <p>{ this.props.place.description }</p>
        <p>{ this.props.place.street }, { this.props.place.city } { this.props.place.state }, { this.props.place.zip }</p>
      </div>
    );
  }
}

// Export dependencies like this:
export default Place;
