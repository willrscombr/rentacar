import * as grpc from '@grpc/grpc-js';
import { ServiceClientConstructor } from '@grpc/grpc-js/build/src/make-client';
import * as protoLoader from '@grpc/proto-loader'
import  path from 'path'


const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  };
const caminho = path.resolve(__dirname, '../../../../../locadoras/dist/proto/locadoras.proto')
const protoObject = protoLoader.loadSync(caminho, options)
const LocadoraService = grpc.loadPackageDefinition(protoObject).LocadoraService

const client = new LocadoraService('localhost:50051', grpc.credentials.createInsecure())


export default client