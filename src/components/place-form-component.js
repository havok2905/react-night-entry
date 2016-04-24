import React from 'react';
import ReactDOM from 'react-dom';
import PlaceActions from '../actions/place-actions';

class PlaceForm extends React.Component {

  constructor() {
    super();
  }

  clearPlaces() {
    PlaceActions.clearPlaces();
    let node = this.input();
    node.value = '';
  }

  input() {
    return ReactDOM.findDOMNode(this.refs.tags);
  }

  setPlaces() {
    let node = this.input();
    let tags = node.value;
    PlaceActions.setPlaces(tags);
  }

  render() {
    return (
      <form className='place-form'>
        <fieldset>
          <label for='tags'>Search for Places</label>
          <input name='tags' ref='tags' type='text' placeholder='pizza,beer,bar' />
        </fieldset>
        <fieldset>
          <button type='button' onClick={this.setPlaces.bind(this)} className='button button--save'>Search</button>
          <button type='button' onClick={this.clearPlaces.bind(this)} className='button button--destroy'>Clear</button>
        </fieldset>
      </form>
    );
  }
}

export default PlaceForm;
