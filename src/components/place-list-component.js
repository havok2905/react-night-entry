import React from 'react';
import PlaceStore from '../stores/place-store';
import Place from '../components/place-component';
import Spinny from '../components/spinny-component';

class PlaceList extends React.Component {

  constructor() {
    super();
    this.state = this.getStateFromStore();
    PlaceStore.addChangeListener(this.onChange.bind(this));
  }

  componentWillUnmount() {
    PlaceStore.removeChangeListener(this.onChange);
  }

  getStateFromStore() {
    return { loading: PlaceStore.loading(), places: PlaceStore.places() };
  }

  onChange() {
    this.setState( this.getStateFromStore() );
  }

  places() {
    return this.state.places.map((place)=> {
      return (
        <li key={ place.id }>
          <Place place={ place }/>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <Spinny spinning={ this.state.loading }/>
        <ul className='place-list'>
          { this.places() }
        </ul>
      </div>
    );
  }
}

// Export dependencies like this:
export default PlaceList;
