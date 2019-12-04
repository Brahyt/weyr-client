import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CreateParty from './CreateParty';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../../util'

const props = {
  parties: [],
  characters: [],
  removeChar: function(){}
}

const setUp = (props={}) => {
  const component = shallow(<CreateParty {...props}/>)
  return component;
}

describe('CreateParty component', () => {
  let component;
  beforeEach(() => {
    component = setUp(props);
  })
  it('renders without crashing', () => {
    const wrapper = findByTestAttr(component, 'create-party')
    expect(wrapper.length).toBe(1)
  });
})

