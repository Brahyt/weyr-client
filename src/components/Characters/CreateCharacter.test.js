import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CreateCharacter from './CreateCharacter';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../../util'

const props = {
  history: [],
  handleSubmitChar: function () {},
  parties: [{party_id: 1, party_name: "test-party"}],
  stickers: [{sticker_id: 1, sticker_title: 'test'}]


}

const setUp = (props={}) => {
  const component = shallow(<CreateCharacter {...props}/>)
  return component;
}

describe('CreateCharacter component', () => {
  let component;
  beforeEach(() => {
    component = setUp(props);
  })
  it('renders without crashing', () => {
    const wrapper = findByTestAttr(component, 'char-form-container')
    expect(wrapper.length).toBe(1)
  });
})
