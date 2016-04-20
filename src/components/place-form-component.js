import React from 'react';
import ReactDOM from 'react-dom';
import PlaceActions from '../actions/place-actions';

class PlaceForm extends React.Component {

  constructor() {
    super();
  }

  clearPlaces() {
    PlaceActions.clearPlaces();
  }

  setPlaces() {
    let node = ReactDOM.findDOMNode(this.refs.tags);
    let tags = node.value;
    PlaceActions.setPlaces(tags);
  }

  render() {
    return (
      <form>
        <fieldset>
          <label for='tags'>Search for Places</label>
          <input name='tags' ref='tags' type='text' placeholder='Tags' />
        </fieldset>
        <fieldset>
          <button type='button' onClick={this.setPlaces.bind(this)} className='button button--save'>Search</button>
          <button type='button' onClick={this.clearPlaces.bind(this)} className='button button--save'>Clear</button>
        </fieldset>
      </form>
    );
  }
}

export default PlaceForm;
