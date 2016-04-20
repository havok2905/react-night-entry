import AppDispatcher from '../dispatcher/app-dispatcher';

let TagActions = {
  setTags: ()=> {
    AppDispatcher.dispatch({ actionType: 'SET_TAGS' });
  }
}

export default TagActions;
