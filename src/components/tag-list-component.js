import React from 'react';
import TagActions from '../actions/tag-actions';
import TagStore from '../stores/tag-store';
import Spinny from '../components/spinny-component';

class TagList extends React.Component {

  constructor() {
    super();
    TagActions.setTags();
    this.state = this.getStateFromStore();
    TagStore.addChangeListener(this.onChange.bind(this));
  }

  componentWillUnmount() {
    TagStore.removeChangeListener(this.onChange);
  }

  getStateFromStore() {
    return { loading: TagStore.loading(), tags: TagStore.tags() };
  }

  onChange() {
    this.setState( this.getStateFromStore() );
  }

  tags() {
    return this.state.tags.map((tag)=> {
      return (
        <li key={ tag.id }>
          { tag.name }
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <Spinny spinning={ this.state.loading }/>
        <ul className='tag-list'>
          { this.tags() }
        </ul>
      </div>
    );
  }
}

// Export dependencies like this:
export default TagList;
