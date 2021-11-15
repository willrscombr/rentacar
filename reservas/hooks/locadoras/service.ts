const urlGatway = "http://locadoras:3000"

export interface LocadoraResp { nome: String, logo: String}
export async function  listarLocadoras(): Promise<LocadoraResp>{
    const resp = await fetch(urlGatway+'/locadoras')
    const locadora : LocadoraResp = await  resp.json()
    return locadora

}