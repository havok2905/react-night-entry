import React from 'react';
import TagActions from '../actions/tag-actions';
import TagStore from '../stores/tag-store';

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
    return { tags: TagStore.tags() };
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
      <ul className='tag-list'>
        { this.tags() }
      </ul>
    );
  }
}

// Export dependencies like this:
export default TagList;
