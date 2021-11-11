import { useRouter } from "next/dist/client/router"
import { useListarResevasPorCidadeEData } from "hooks/reservas/service"
import { Card, Container, Grid, Typography } from "@mui/material"



export default function Reservas(){
    const router = useRouter()
    
    const {cidade, dataHoraRetirada, dataHoraDevolucao} = router.query
    
    console.log(cidade)
    
    const reservas = useListarResevasPorCidadeEData(cidade, dataHoraRetirada, dataHoraDevolucao)

    if(!reservas){
        return <h1>Carregando</h1>
    }
    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    {reservas.map( reserva => {
                        return <Card variant="elevation" 
                        sx={{marginBottom: 10, padding: 5}}  >
                               <Typography variant="h2">
                                     { reserva.veiculoNome }
                                </Typography>
                                <img src={reserva.imagem}/>
                                <Typography variant="h3" sx={{textAlign: 'end', color:'green'}}>
                                  R$  { reserva.valor }
                                 </Typography>
                                 <Typography variant="h4">
                                     { reserva.localRetirada}
                                 </Typography>
                               </Card>
                    })}
                    
                </Grid>
            </Grid>
       </Container>
        )

}