export default class Locadora{


    constructor( private nome:String, private logo: String, private urlCarrosDisnopiveis = null){}

    getNome(){
        return this.nome
    }

    getLogo(){
        return this.logo
    }

    getUrlCarrosDisponiveis(){
        return this.urlCarrosDisnopiveis
    }
}