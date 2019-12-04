import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CharacterDetails from './CharacterDetails';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../../util'

const character = {
  name: "name-test",
  char_class: "class-test",
  sub_class: 'sub_class-test',
  health: 4,
  xp: 4,
  hand_size: 4
}
const equipment = {
  arcane: 5,
  deception: 5,
  martial: 5,
  devotion: 5
}
const stickers = [
  {
    title: 'test',
    description: 'test',
    cost: 1
  }
]
const match = {
  params: {
    id: 1
  }
}
const linkToChar = () => {}

const setUp = (props={equipment, character, stickers, match, linkToChar}) => {
  const component = shallow(<CharacterDetails {...props}/>)
  return component;
}

describe('CharacterDetails component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })
  it('renders without crashing', () => {
    const wrapper = findByTestAttr(component, 'char-details-page')
    expect(wrapper.length).toBe(1)
  });
})
