import EventEmitter from 'events';
import Api from '../services/api';

class TagStore extends EventEmitter {
  constructor() {
    super();
    this._tags = [];
    this._loading = false;
  }

  tags() {
    return this._tags;
  }

  loading() {
    return this._loading;
  }

  setTags(tags) {
    this._loading = true;
    this.emitChange();

    Api.tags().then((result)=> {
      this._tags = result.tags;
      this._loading = false;
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
