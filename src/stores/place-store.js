import EventEmitter from 'events';
import Api from '../services/api';

class PlaceStore extends EventEmitter {
  constructor() {
    super();
    this._places = [];
    this._loading = false
  }

  places() {
    return this._places;
  }

  loading() {
    return this._loading;
  }

  setPlaces(tags) {
    this._loading = true;
    this.emitChange();

    Api.places(tags).then((result)=> {
      this._places = result.places;
      this._loading = false;
      this.emitChange();
    });
  }

  setAllPlaces() {
    this._loading = true;
    this.emitChange();

    Api.allPlaces().then((result)=> {
      this._places = result.places;
      this._loading = false;
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
