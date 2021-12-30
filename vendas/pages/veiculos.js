import ProductList from "../components/ProductList"
import Navbar from "../components/Navbar"
export default function Veichles() {

  const products = [
    {
      title: "Vectra",
      image: "https://images.noticiasautomotivas.com.br/img/f/Chevrolet-Vectra-2.jpg",
      description: "Vectra 2014",
      color: "Preto",
      price: "20255",
    },
    {
      title: "Gol",
      image: "https://images.noticiasautomotivas.com.br/img/f/volkswagen_gol_power_2007.jpg",
      description: "Gol g4",
      color: "Vermelho",
      price: "20000",
    },
    {
      title: "C4 Lounge",
      image: "https://www.comprecar.com.br/storage/news/featured/7mUm7_qPMl43Zwj.jpg",
      description: "C4 Loung 1.6 Turbo",
      color: "Branco",
      price: "70000",
    },
    {
      title: "Vectra",
      image: "https://images.noticiasautomotivas.com.br/img/f/Chevrolet-Vectra-2.jpg",
      description: "Vectra 2014",
      color: "Preto",
      price: "20255",
    },
    {
      title: "Gol",
      image: "https://images.noticiasautomotivas.com.br/img/f/volkswagen_gol_power_2007.jpg",
      description: "Gol g4",
      color: "Vermelho",
      price: "20000",
    },
    {
      title: "C4 Lounge",
      image: "https://www.comprecar.com.br/storage/news/featured/7mUm7_qPMl43Zwj.jpg",
      description: "C4 Loung 1.6 Turbo",
      color: "Branco",
      price: "70000",
    },
    {
      title: "Vectra",
      image: "https://images.noticiasautomotivas.com.br/img/f/Chevrolet-Vectra-2.jpg",
      description: "Vectra 2014",
      color: "Preto",
      price: "20255",
    },
    {
      title: "Gol",
      image: "https://images.noticiasautomotivas.com.br/img/f/volkswagen_gol_power_2007.jpg",
      description: "Gol g4",
      color: "Vermelho",
      price: "20000",
    },
    {
      title: "C4 Lounge",
      image: "https://www.comprecar.com.br/storage/news/featured/7mUm7_qPMl43Zwj.jpg",
      description: "C4 Loung 1.6 Turbo",
      color: "Branco",
      price: "70000",
    },
    {
      title: "Vectra",
      image: "https://images.noticiasautomotivas.com.br/img/f/Chevrolet-Vectra-2.jpg",
      description: "Vectra 2014",
      color: "Preto",
      price: "20255",
    },
    {
      title: "Gol",
      image: "https://images.noticiasautomotivas.com.br/img/f/volkswagen_gol_power_2007.jpg",
      description: "Gol g4",
      color: "Vermelho",
      price: "20000",
    },
    {
      title: "C4 Lounge",
      image: "https://www.comprecar.com.br/storage/news/featured/7mUm7_qPMl43Zwj.jpg",
      description: "C4 Loung 1.6 Turbo",
      color: "Branco",
      price: "70000",
    },
  ]

    return (  
      <>
      <Navbar/>
      <div class="container mx-auto">
 
        <ProductList products={products}></ProductList>
      </div>
      </>
      )

}

