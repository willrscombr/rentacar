export default function ProductList({ products }) {

    if (products == undefined || products.length <= 0)
        return <>
            Veiculos não encontrados
        </>



    return (
        <div className="grid  xl:grid-cols-4  md:grid-cols-3 sm:grid-cols-1 gap-4 sm:m-8">
            {
                Array.from(products).map(product => {
                    return (
                        <>
                            <div className={"bg-green-600 rounded-md "}>

                                    <div className={" grid grid-cols-1 gap-x-8 "}>
                                        <div className={"group relative"}>
                                            <div className={"w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"}>
                                                <img src={product.image}
                                                    alt={product.description}
                                                    className={"w-full h-full object-center object-cover lg:w-full lg:h-full"}
                                                />
                                            </div>
                                            <div className="px-4 py-2 mx-2">
                                                
                                                <h2 className={"text-2xl font-bold  text-gray-800"}>
                                                    {product.title}
                                                </h2>
                                                
                                                <h3 className={"text-sm text-gray-700"}>
                                                    <a href="#">
                                                        <span aria-hidden="true" className={"absolute inset-0"}></span>
                                                        {product.description}
                                                    </a>
                                                </h3>
                                                <div>
                                                    <p className={"mt-1 text-sm text-gray-500"}>{product.color}</p>
                                                </div>
                                                <div className={"mt-4 flex justify-between"}>
                                                    <p className={"text-1xl font-bold text-red-700"}>R$ {product.price}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                            </div>
                        </>
                    )
                })
            }
        </div>

    )

}