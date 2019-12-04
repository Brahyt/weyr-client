import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Parties from './Parties';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../../util'

const props = {
parties: []
}

const setUp = (props={}) => {
  const component = shallow(<Parties {...props}/>)
  return component;
}

describe('Parties component', () => {
  let component;
  beforeEach(() => {
    component = setUp(props);
  })
  it('renders without crashing', () => {
    const wrapper = findByTestAttr(component, 'parties')
    expect(wrapper.length).toBe(1)
  });
})

