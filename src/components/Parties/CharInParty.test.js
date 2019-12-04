import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CharInParty from './CharInParty';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../../util'

const props = {
  parties: [],
  characters: [],
  removeChar: function(){}
}

const setUp = (props={}) => {
  const component = shallow(<CharInParty {...props}/>)
  return component;
}

describe('CharInParty component', () => {
  let component;
  beforeEach(() => {
    component = setUp(props);
  })
  it('renders without crashing', () => {
    const wrapper = findByTestAttr(component, 'char-in-party')
    expect(wrapper.length).toBe(1)
  });
})

