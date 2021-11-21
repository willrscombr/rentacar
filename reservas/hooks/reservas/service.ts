import { fetcher } from 'infra/fetcher'
import useSWR from 'swr'

const urlGatway = "http://localhost:3002"

export type  ReservasResp = {
    veiculoNome: string,
    valor: number,
    localRetirada: string,
    imagem: string
}
export function  useListarResevasPorCidadeEData(cidade: string, dataHoraRetirada: string, dataHoraDevolucao: string): Array<ReservasResp> | [] {
    let reservas: Array<ReservasResp> = []
    const {data: reservas_movida} = useSWR<Array<ReservasResp>>(`${urlGatway}/locadoras/movida`, fetcher, {revalidateIfStale: false, revalidateOnFocus: false, refreshInterval: 0})
    const {data: reservas_localiza} = useSWR<Array<ReservasResp>>(`${urlGatway}/locadoras/localiza`, fetcher)

    reservas = reservas_movida ? reservas_movida : []
    return reservas.concat(reservas_localiza ? reservas_localiza : [])

   

}