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
        <p>{ this.props.place.street }, { this.props.place.city }</p>
        <p>{ this.props.place.state }, { this.props.place.zip }</p>
        <Map lat={ this.props.place.lat } lon={ this.props.place.lon }/>
      </div>
    );
  }
}

// Export dependencies like this:
export default Place;
