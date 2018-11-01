import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import Index from 'src/Pages/App/index'

describe('Index component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays a welcome message', () => {
    render(<Index/>, node, () => {
      expect(node.textContent).toContain('Welcome to React')
    })
  })
})
