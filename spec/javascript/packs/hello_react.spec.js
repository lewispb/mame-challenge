import React from 'react'
import { shallow } from 'enzyme'
import Hello from 'packs/hello_react'

describe('HelloReact component', () => {
  describe('when a name is given as a prop', () => {
    it('renders Hello Lewis!', () => {
      const wrapper = shallow(<Hello name="Lewis"/>);
      expect(wrapper.text()).toBe('Hello Lewis!');
    })
  })

  describe('when no name is given', () => {
    it('renders Hello David!', () => {
      const wrapper = shallow(<Hello />);
      expect(wrapper.text()).toBe('Hello David!');
    })
  })
})
