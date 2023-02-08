import { Box, Paper } from '@mui/material'
import React from 'react'

export default function MainCards() {
  return (
    <div>
        <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
            m: 1,
            width: 230,
            height: 128,
            cursor: 'pointer',
            },
        }}
        >
        <Paper elevation={3} />
        <Paper />
        <Paper />
        <Paper elevation={3} />
        </Box>
    </div>
  )
}
