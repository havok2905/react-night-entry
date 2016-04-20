import EventEmitter from 'events';
import Api from '../services/api';
import SpinnyStore from './spinny-store';

class PlaceStore extends EventEmitter {
  constructor() {
    super();
    this._places = [];
  }

  places() {
    return this._places;
  }

  setPlaces(tags) {
    Api.places(tags).then((result)=> {
      SpinnyStore.toggleSpinningOff();
      this._places = result.places;
      this.emitChange();
    });
  }

  clearPlaces() {
    this._places = [];
    this.emitChange();
  }

  emitChange() {
    this.emit('places-change');
  }

  addChangeListener(callback) {
    this.on('places-change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('places-change', callback);
  }
}

export default new PlaceStore();
