import React from 'react';
import { shallow } from 'enzyme';
import NoteListItem from './NoteListItem';

describe('NoteListItem', () => {
  const note = {
    id: 1001,
    title: 'Note A',
    body:
      'A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps quickly in fog. Watch "Jeopardy! ", Alex Trebek\'s fun TV quiz game.'
  };

  it('Renders note', () => {
    const wrapper = shallow(<NoteListItem note={note} />);
    expect(wrapper.find('.NoteListItem-clickable').text()).toBe(note.title);
  });

  it('Triggers onSelect', () => {
    const onSelect = jest.fn();
    const wrapper = shallow(<NoteListItem note={note} onSelect={onSelect} />);
    wrapper
      .find('.NoteListItem-clickable')
      .simulate('click', { preventDefault: () => {} });
    expect(onSelect).toBeCalled();
  });
});
