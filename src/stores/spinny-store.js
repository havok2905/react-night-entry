import EventEmitter from 'events';

class SpinnyStore extends EventEmitter {
  constructor() {
    super();
    this._spinning = false;
  }

  spinning() {
    return this._spinning;
  }

  toggleSpinningOn() {
    this._spinning = true;
    this.emitChange();
  }

  toggleSpinningOff() {
    this._spinning = false;
    this.emitChange();
  }

  emitChange() {
    this.emit('spinning-change');
  }

  addChangeListener(callback) {
    this.on('spinning-change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('spinning-change', callback);
  }
}

export default new SpinnyStore();
