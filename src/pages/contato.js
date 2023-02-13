import Layout from '@/components/Layout';
import styles from '@/styles/styledoed.module.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react'
import { Grid } from '@mui/material';

export default function contato() {
  return (
    <Layout>
        <Box className={styles.contactform}
        >
            <h1>Contato</h1>
            <Paper>
       
            <Grid container>
                <Grid item xs={6}>
                    <input type="text" name="nome" placeholder='Nome'/>
                </Grid>
                <Grid item xs={6}>
                    <input type="text" name="email" placeholder='E-mail' />
                </Grid>
                <Grid item xs={4}>
                    <input type="text" name="ddd" placeholder='DDD' />
                </Grid>
                <Grid item xs={8}>
                    <input type="text" name="celular" placeholder='Celular' />
                </Grid>
                <Grid xs={12}>
                    <textarea
                        id="mensagem"
                        name="mensagem"
                        placeholder='Mensagem'
                        rows={4}
                        cols={100}
                    />
                </Grid>
            </Grid>
            <Button variant="contained">Enviar</Button>
            </Paper>
        </Box>
    </Layout>
  )
}
