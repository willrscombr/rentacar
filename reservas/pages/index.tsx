import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import { Autocomplete, Card, CardActions, CardContent, Container, Grid, TextField } from '@mui/material';

const Home: NextPage = () => (
  <div >
    <Head>
      <title>Reservas</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Reservas
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

    <Container>
      <Grid container>
        <Grid item xs={12}>
          
            <Typography variant="h2">
              Pesquise, Compare e Alugue
            </Typography>

            <Typography variant="h3">
              Aluguel de carros com os melhores preços
            </Typography>
        
        </Grid>
        <Grid item xs={12}>

        <Card variant="outlined">
      <CardContent>
        <Box>
          <Typography variant="h4">
            Retire seu carro em: 
          </Typography>

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={["Goiânia", "Curitiba"]}
          sx={{ width: 300 }}
          renderInput={(params: any) => <TextField {...params} label="Cidades" />}
          />
      </Box>
      <Button variant="contained">Buscar</Button>
      </CardContent>
      
    </Card>

        </Grid>
      </Grid>

     

    
    </Container>

    <footer>

    </footer>
  </div>
)

export default Home