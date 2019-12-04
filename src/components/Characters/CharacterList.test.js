import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CharacterList from './CharacterList';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../../util'


const props = {
  charProps: [{char_id: 1}],
  linkToChar: function(){}
}
const linkToChar = () => {}

const setUp = (props) => {
  const component = shallow(<CharacterList {...props}/>)
  return component;
}

describe('CharacterList component', () => {
  let component;
  beforeEach(() => {
    component = setUp(props);
  })
  it('renders without crashing', () => {
    const wrapper = findByTestAttr(component, 'char-list')
    expect(wrapper.length).toBe(1)
  });
})
