import React from 'react';
import Map from './map-component';

class Place extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <img src='http://www.fillmurray.com/350/275'/>
        <div class='place-list__content'>
          <p><strong>{ this.props.place.name }</strong></p>
          <p>{ this.props.place.description }</p>
          <p><strong>{ this.props.place.street }, { this.props.place.city } { this.props.place.state }, { this.props.place.zip }</strong></p>
          <p><a href=''>Website</a></p>
        </div>
      </div>
    );
  }
}

// Export dependencies like this:
export default Place;
