import React from 'react';
import styles from '@/styles/styledoed.module.css';
import { Chart as GoogleChart } from "react-google-charts";
import { Box, Paper } from '@mui/material'

export const data = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
  ];


export default function Chart() {
  return (
    <div className={styles.chart}>
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                m: 1,
                width: 960,
                height: 500,
                cursor: 'pointer',
                },
            }}
        >
            <Paper>
                Chart
                <GoogleChart
                chartEvents={[
                    {
                    eventName: "select",
                    callback: ({ chartWrapper }) => {
                        const chart = chartWrapper.getChart();
                        const selection = chart.getSelection();
                        if (selection.length === 0) return;
                        const region = data[selection[0].row + 1];
                        console.log("Selected : " + region);
                    },
                    },
                ]}
                chartType="GeoChart"
                width="100%"
                height="400px"
                data={data}
                />
            </Paper>
        </Box>
    </div>
  )
}
