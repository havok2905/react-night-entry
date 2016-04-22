import React from 'react';

class Spinny extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.spinning) {
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
