import EventEmitter from 'events';
import Api from '../services/api';

class TagStore extends EventEmitter {
  constructor() {
    super();
    this._tags = [];
  }

  tags() {
    return this._tags;
  }

  setTags(tags) {
    Api.tags().then((result)=> {
      this._tags = result.tags;
      this.emitChange();
    });
  }

  emitChange() {
    this.emit('tags-change');
  }

  addChangeListener(callback) {
    this.on('tags-change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('tags-change', callback);
  }
}

export default new TagStore();
