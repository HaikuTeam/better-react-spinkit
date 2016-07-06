import { default as React } from 'react'
import { default as TestUtils } from 'react-addons-test-utils'
import { default as expect } from 'expect'
import { Pulse } from '../src'
import { default as Base } from '../src/Base'

const renderer = TestUtils.createRenderer()

describe('Pulse', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Pulse />)
    tree = renderer.getRenderOutput()
  })

  it('renders a container', () => {
    expect(tree.type).toEqual(Base)
  })
})
