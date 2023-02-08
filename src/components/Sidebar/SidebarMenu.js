import Link from 'next/link'
import React from 'react'

export default function SidebarMenu() {
  return (
    <div>
      <ul>
        <li><Link href="/home">Home</Link></li>
      </ul>
    </div>
  )
}
