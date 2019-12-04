import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EditCharacter from './EditCharacter';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../../util'

const props = {
  history: [],
  editChar: function () {},
  deleteChar: function () {},
  character: {equipment:{}},
  characters: [{}],
  parties: [{party_id: 1, party_name: "test-party"}],
  stickers: [{sticker_id: 1}],
  charProps: [{}]
}

const setUp = (props={}) => {
  const component = shallow(<EditCharacter {...props}/>)
  return component;
}

describe('EditCharacter component', () => {
  let component;
  beforeEach(() => {
    component = setUp(props);
  })
  it('renders without crashing', () => {
    const wrapper = findByTestAttr(component, 'edit-char')
    expect(wrapper.length).toBe(1)
  });
})
