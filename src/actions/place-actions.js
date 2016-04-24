import AppDispatcher from '../dispatcher/app-dispatcher';

let PlaceActions = {
  setPlaces: (tags)=> {
    AppDispatcher.dispatch({
      actionType: 'SET_PLACES',
      tags:    tags
    });
  },
  setAllPlaces: (tags)=> {
    AppDispatcher.dispatch({ actionType: 'SET_ALL_PLACES' });
  },
  clearPlaces: ()=> {
    AppDispatcher.dispatch({ actionType: 'CLEAR_PLACES' });
  }
}

export default PlaceActions;
