import React from 'react';

class Map extends React.Component {

  constructor(props) {
    super();
  }

  mapBase() {
    return 'http://maps.google.com/maps?q=';
  }

  mapOptions() {
    return '&z=15&output=embed'
  }

  render() {
    return (
      <iframe
        className = 'map'
        src       = { `${ this.mapBase() }${ this.props.lat },${ this.props.lon }${ this.mapOptions() }` }>
      </iframe>
    );
  }
}

export default Map;
