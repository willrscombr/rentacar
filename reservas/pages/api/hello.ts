// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import client from '../../infra/grpc'
import {promisify} from 'util';

const buscarVeiculosParaLocacaoPorPeriodo = promisify(client.buscarVeiculosParaLocacaoPorPeriodo)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object>
) {

  try{
      client.buscarVeiculosParaLocacaoPorPeriodo({dataInicio : "2021-01-01", dataFim: "2021-01-31", cidade : "Goiânia"}, function(err, response){
        if (err)
          return res.status(500).json({message: "Erro ao conectar no serviço GRPC", err})
          

        return res.status(200).json({ name: 'John Doe', ...response })
      })
    }catch(err){
    }

}
