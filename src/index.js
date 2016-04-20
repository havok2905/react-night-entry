// Import NPM dependencies like this:
import React from 'react';
import ReactDOM from 'react-dom';

// Import styles like this:
import './styles/main.scss';

// Import dependencies like this:
import TagList from './components/tag-list-component';
import PlaceForm from './components/place-form-component';
import PlaceList from './components/place-list-component';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hidden Gems</h1>
        <section class='places'>
          <h2>Places</h2>
          <PlaceForm />
          <PlaceList />
        </section>
        <section class='tags'>
          <h2>Tags</h2>
          <TagList/>
        </section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
