import React from 'react'
import styles from '@/styles/styledoed.module.css'
import SidebarMenu from './SidebarMenu'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <SidebarMenu />
    </div>
  )
}
