import Link from 'next/link'
import React from 'react'
import AddHomeTwoToneIcon from '@mui/icons-material/AddHomeTwoTone';
import InsertChartTwoToneIcon from '@mui/icons-material/InsertChartTwoTone';
import ContactMailTwoToneIcon from '@mui/icons-material/ContactMailTwoTone';

export default function SidebarMenu() {
  return (
    <div>
      <ul>
        <li><Link href="/home"><AddHomeTwoToneIcon />Home</Link></li>
        <li><Link href="/contato"><ContactMailTwoToneIcon />Currículo</Link></li>
        <li><Link href="/graficos"><InsertChartTwoToneIcon />Gráficos</Link></li>
        <li><Link href="/contato"><ContactMailTwoToneIcon />Contato</Link></li>
      </ul>
    </div>
  )
}
