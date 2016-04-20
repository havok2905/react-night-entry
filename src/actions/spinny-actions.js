import AppDispatcher from '../dispatcher/app-dispatcher';

let SpinnyActions = {
  spinnyOff: (tags)=> {
    AppDispatcher.dispatch({ actionType: 'SPINNING_OFF' });
  },
  spinnyOn: (tags)=> {
    AppDispatcher.dispatch({ actionType: 'SPINNING_ON' });
  }
}

export default SpinnyActions;
