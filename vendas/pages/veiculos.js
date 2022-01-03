import ProductList from "../components/ProductList"
import Navbar from "../components/Navbar"
export default function Veichles() {

  const products =  [
    {
      title: "Vectra",
      image: "https://images.noticiasautomotivas.com.br/img/f/Chevrolet-Vectra-2.jpg",
      description: "Vectra 2014",
      color: "Preto",
      rentPricemouth: ((21200 *1.3 ) /12) ,
      price: 20000,
      fipe: 21200,
      place: {
        city: "Brasilia",
        state: "DF"
      }
    },
    {
      title: "Gol",
      image: "https://images.noticiasautomotivas.com.br/img/f/volkswagen_gol_power_2007.jpg",
      description: "Gol g4",
      color: "Vermelho",
      rentPricemouth: ((22300 *1.3 ) /12) ,
      price: 19550,
      fipe: 22300,
      place: {
        city: "Curitiba",
        state: "PR"
      }
    },
    {
      title: "C4 Lounge",
      image: "https://www.comprecar.com.br/storage/news/featured/7mUm7_qPMl43Zwj.jpg",
      description: "C4 Loung 1.6 Turbo",
      color: "Branco",
      rentPricemouth: ((69850 *1.3 ) /12) ,
      price: 70000,
      fipe: 69850,
      place: {
        city: "Goiânia",
        state: "GO"
      }
    }
  ]

    return (  
      <>
      <Navbar/>
      <div class="container mx-auto">
        <h2 class="text-2xl">Filtros</h2>
      </div>
      <div class="container mx-auto">
 
        <ProductList  products={products}></ProductList>
      </div>
      </>
      )

}

