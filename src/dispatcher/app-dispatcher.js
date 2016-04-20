import Flux from 'flux';

import PlaceStore from '../stores/place-store';
import TagStore from '../stores/tag-store';
import SpinnyStore from '../stores/spinny-store';

let AppDispatcher = new Flux.Dispatcher();

AppDispatcher.register((action)=> {
  switch(action.actionType) {
    case 'SET_PLACES':
      PlaceStore.setPlaces(action.tags);
      break;
    case 'CLEAR_PLACES':
      PlaceStore.clearPlaces();
      break;
    case 'SET_TAGS':
      TagStore.setTags();
      break;
    case 'SPINNING_OFF':
      SpinnyStore.toggleSpinningOff();
      break;
    case 'SPINNING_ON':
      SpinnyStore.toggleSpinningOn();
      break;
  }
});

export default AppDispatcher;
