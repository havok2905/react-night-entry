import React from 'react';
import SpinnyStore from '../stores/spinny-store';

class Spinny extends React.Component {

  constructor(props) {
    super();
    this.state = this.getStateFromStore();
    SpinnyStore.addChangeListener(this.onChange.bind(this));
  }

  componentWillUnmount() {
    SpinnyStore.removeChangeListener(this.onChange);
  }

  getStateFromStore() {
    return { spinning: SpinnyStore.spinning() };
  }

  onChange() {
    this.setState( this.getStateFromStore() );
  }

  render() {
    if(this.state.spinning) {
      return (
        <div className='spinny'>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default Spinny;
