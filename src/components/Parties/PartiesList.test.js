import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PartiesList from './PartiesList';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../../util'

const props = {
parties: []
}

const setUp = (props={}) => {
  const component = shallow(<PartiesList {...props}/>)
  return component;
}

describe('PartiesList component', () => {
  let component;
  beforeEach(() => {
    component = setUp(props);
  })
  it('renders without crashing', () => {
    const wrapper = findByTestAttr(component, 'parties-list')
    expect(wrapper.length).toBe(1)
  });
})

