import AppDispatcher from '../dispatcher/app-dispatcher';

let PlaceActions = {
  setPlaces: (tags)=> {
    AppDispatcher.dispatch({
      actionType: 'SET_PLACES',
      tags:    tags
    });
  },
  clearPlaces: ()=> {
    AppDispatcher.dispatch({ actionType: 'CLEAR_PLACES' });
  }
}

export default PlaceActions;
