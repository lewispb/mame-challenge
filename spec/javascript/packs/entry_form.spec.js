import React from 'react'
import { shallow } from 'enzyme'
import EntryForm from 'packs/entry_form'

describe('EntryForm component', () => {
  it('renders without raising an error', () => {
    const wrapper = shallow(<EntryForm />);
    expect(wrapper.find('form').exists()).toBe(true)
    //expect(wrapper.find('[name="twitter_handle"]').exists()).toBe(true)
  })
})
