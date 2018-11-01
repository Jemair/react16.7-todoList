import React from 'react'
import { Menu } from 'antd'
import { Link } from '@reach/router'
import s from './index.less'

const { SubMenu, Item } = Menu

export default function Nav () {
  const handleClick = ({ key }) => {
    console.log(key)
  }
  return (
    <Menu
      onClick={handleClick}
      className={s.nav}
      defaultOpenKeys={['note']}
      defaultSelectedKeys={['all']}
      mode='inline'
    >
      <SubMenu key='note' title='笔记'>
        <Item key='all'><Link to='/all'>全部笔记</Link></Item>
        <Item key='noTag'>无标签</Item>
        <Item key='todo'>待办事项</Item>
        <Item key='today'>今天</Item>
      </SubMenu>
    </Menu>
  )
}
