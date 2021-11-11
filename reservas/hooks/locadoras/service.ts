const urlGatway = "http://localhost:3002"

export interface LocadoraResp { nome: String, logo: String}
export async function  listarLocadoras(): Promise<LocadoraResp>{
    console.log('listarLocadoras')
    const resp = await fetch(urlGatway+'/locadoras')
    const locadora : LocadoraResp = await  resp.json()
    console.log('l',resp, locadora)
    return locadora

}