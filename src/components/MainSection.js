import React from 'react'
import styles from '@/styles/styledoed.module.css'

export default function MainSection({children}) {
  return (
    <div className={styles.mainsection}>
      Main Section
      {children}
    </div>
  )
}
