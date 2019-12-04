import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Characters from './Characters';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../../util'

const setUp = (props={}) => {
  const component = shallow(<Characters {...props}/>)
  return component;
}

describe('Characters component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })
  it('renders without crashing', () => {
    const wrapper = findByTestAttr(component, 'title')
    expect(wrapper.length).toBe(1)
  });
})
