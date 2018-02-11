import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import App from '../pages/index.js'
import Project from '../components/project.js'

describe('With Enzyme', () => {
  it('App renders 10 <Project /> components', () => {
    const app = shallow(<App />)
    expect(app.find(Project)).toHaveLength(10)
  })
})

describe('With Snapshot Testing', () => {
  it('App renders projects', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
