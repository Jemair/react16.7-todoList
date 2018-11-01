import React from 'react'
import { Link } from '@reach/router'
import { List } from 'antd'

import s from './index.less'

const { Item } = List

const data = [{
  title: 'xxxx',
  content: 'Lorem'
}]

function NoteList (props) {
  console.log(props)
  return (
    <List
      className={s.noteList}
    >
      <Item><Link to='ddd'>dddd</Link></Item>
    </List>
  )
}

export default NoteList
