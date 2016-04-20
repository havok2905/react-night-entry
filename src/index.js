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
        <header className='header'>
          <h1>Hidden Gems</h1>
          <h2>Central Florida's Database of Local Eats</h2>
        </header>
        <section className='places'>
          <h3>Places</h3>
          <PlaceForm />
          <PlaceList />
        </section>
        <section className='tags'>
          <h3>Tags</h3>
          <TagList/>
        </section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
