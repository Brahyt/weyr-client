import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EachCharOnList from './EachCharOnList';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../../util'

const props = {
  history: [],
  linkToChar: function () {},
  parties: [{party_id: 1, party_name: "test-party"}],
  stickers: [{sticker_id: 1, sticker_title: 'test'}],
  charProps: [{}]
}

const setUp = (props={}) => {
  const component = shallow(<EachCharOnList {...props}/>)
  return component;
}

describe('EachCharOnList component', () => {
  let component;
  beforeEach(() => {
    component = setUp(props);
  })
  it('renders without crashing', () => {
    const wrapper = findByTestAttr(component, 'each-char')
    expect(wrapper.length).toBe(1)
  });
})
