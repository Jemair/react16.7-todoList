import React from 'react'
import { Router } from '@reach/router'
import Nav from '../../Components/Nav'
import NoteList from '../../Components/NoteList'
import All from '../All'
import s from './index.less'

export default function App () {
  return <div className={s.container}>
    <Nav />
    <Router><NoteList path='/:name/*' /></Router>
    <div className={s.main}>
      <Router>
        <All path='/all' />
      </Router>
    </div>
  </div>
}
