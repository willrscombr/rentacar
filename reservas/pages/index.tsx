import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import {DateTimePicker} from '@mui/lab';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Autocomplete, Card, CardActions, CardContent, Container, Grid, TextField, AppBar } from '@mui/material';

import {listarLocadoras, LocadoraResp} from "../locadoras/service"

interface props { locadoras: [LocadoraResp]}

const Home: React.FC<props> = ({locadoras}) => { 

  

  const [dataHoraRetirada, setDataHoraRetirada] = React.useState(null)
  const [dataHoraDevolucao, setDataHoraDevolucao] = React.useState(null)

  return (

    <div >
      <Head>
        <title>Rent a car - Protótipo</title>
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
              Rent a car - Protótipo
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            
              <Typography variant="h3">
                Pesquise, Compare e Alugue
              </Typography>

              <Typography variant="h4">
                Aluguel de carros com os melhores preços
              </Typography>
          
          </Grid>
          <Grid item xs={12}>

          <Card variant="outlined">
        <CardContent>
          <Box>
            <Typography variant="h5">
              Retire seu carro em: 
            </Typography>

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={["Goiânia", "Curitiba"]}
            sx={{ width: 300 }}
            renderInput={(params: any) => <TextField {...params} label="Cidades" />}
            />
            <DateTimePicker
            label="Data e Hora da retirada"
            value={dataHoraRetirada}
            onChange={()=>console.log('foi')}
            renderInput={(params:any) => <TextField {...params} />}
          />
          <DateTimePicker
            label="Data e Hora da devolução"
            value={dataHoraDevolucao}
            onChange={()=>console.log('foi')}
            renderInput={(params:any) => <TextField {...params} />}
          />
        </Box>

        <Button variant="contained">Pesquisar</Button>
        </CardContent>
        
      </Card>

      <Card>
        <CardContent>
        <Typography variant="h4">
          Locadoras
        </Typography>

     
        <Grid container >
        { locadoras &&  locadoras.map( (locadora, key) => 
   
          <Grid item sx={{padding: '20px'}}   key={key}>
            <Box sx={{ 'display': 'flex', flexDirection: 'column', textAlign: 'center' }}>
            {locadora.nome}
            <img width="100" src={locadora.logo.toString()}/>
            </Box>
          </Grid>
      
        )}
        </Grid>
      
      {/* { JSON.stringify(locadoras)} */}

        </CardContent>
      </Card>


          </Grid>
        </Grid>

      

      
      </Container>
      </LocalizationProvider>

      <footer>

      </footer>
    </div>
)}

export async function getStaticProps() {



  return {
    props: {
      locadoras: await listarLocadoras()
    },
  }
}

export default Home
