import Chart from '@/components/chart'
import Layout from '@/components/Layout'
import MainCards from '@/components/MainCards'
import React from 'react'

export default function home() {
  return (
    <Layout>
      <MainCards />
      <Chart />
    </Layout>  
  )
}
