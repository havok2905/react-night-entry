import React from 'react';
import Map from './map-component';

class Place extends React.Component {

  constructor() {
    super();
  }

  cover() {
    return `http://quiet-thicket-99975.herokuapp.com/assets/${this.props.place.cover}`;
  }

  render() {
    return (
      <div>
        <img src={ this.cover() } alt={ this.props.place.name }/>
        <div class='place-list__content'>
          <p><strong>{ this.props.place.name }</strong></p>
          <p>{ this.props.place.description }</p>
          <p><strong>{ this.props.place.street }, { this.props.place.city } { this.props.place.state }, { this.props.place.zip }</strong></p>
          <p><a href={ this.props.place.website }>Website</a></p>
        </div>
      </div>
    );
  }
}

// Export dependencies like this:
export default Place;
