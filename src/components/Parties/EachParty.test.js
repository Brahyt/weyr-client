import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EachParty from './EachParty';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../../util'

const props = {
  parties: [],
  characters: [],
  removeChar: function(){}
}

const setUp = (props={}) => {
  const component = shallow(<EachParty {...props}/>)
  return component;
}

describe('EachParty component', () => {
  let component;
  beforeEach(() => {
    component = setUp(props);
  })
  it('renders without crashing', () => {
    const wrapper = findByTestAttr(component, 'each-party')
    expect(wrapper.length).toBe(1)
  });
})

