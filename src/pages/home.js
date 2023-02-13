import Chart from '@/components/Chart'
import Layout from '@/components/Layout'
import MainCards from '@/components/MainCards'
import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function home() {
  return (
    <Layout>
      <CssBaseline />
      <Container>
        <MainCards />
        <Chart />
      </Container>
    </Layout>  
  )
}
