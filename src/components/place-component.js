import React from 'react';

class Place extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <p><strong>{ this.props.place.name }</strong></p>
        <p>{ this.props.place.description }</p>
        <p>{ this.props.place.street }</p>
        <p>{ this.props.place.city }</p>
        <p>{ this.props.place.state }</p>
        <p>{ this.props.place.zip }</p>
      </div>
    );
  }
}

// Export dependencies like this:
export default Place;
