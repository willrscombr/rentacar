import { useRouter } from "next/dist/client/router"
import { useListarResevasPorCidadeEData,ReservasResp } from "hooks/reservas/service"
import { Button, Card, Container, Grid, Typography, Box } from "@mui/material"
import Navbar from "components/navbar"


export default function Reservas(){
    const router = useRouter()
    
    const {cidade, dataHoraRetirada, dataHoraDevolucao} = router.query

    const reservas  = useListarResevasPorCidadeEData(`${cidade}`, `${dataHoraRetirada}`, `${dataHoraDevolucao}`)
    

    if(!reservas){
        return <h1>Carregando</h1>
    }
    return (
        <>
         <Navbar/>
        <Container>
           
            <Grid container>
                <Grid item xs={12}>
                    {reservas.map( reserva => {
                        return <Card variant="elevation" 
                        sx={{marginBottom: 10, padding: 5}}  >
                               <Typography variant="h2">
                                     { reserva.veiculoNome }
                                </Typography>
                                <img src={reserva.imagem} />
                                
                                 <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end'}}>
                                    <Typography variant="h3" sx={{textAlign: 'end', color:'green'}}>
                                    R$  { reserva.valor }
                                    </Typography>
                                    <Button  variant="contained">Contratar</Button>
                                </Box>
                                 <Typography variant="h6">
                                     { reserva.localRetirada}  
                                 </Typography>
                              
                               </Card>
                    })}
                    
                </Grid>
            </Grid>
       </Container>
       </>
        )

}