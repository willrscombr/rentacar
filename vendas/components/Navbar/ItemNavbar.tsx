import Link  from 'next/link'
export default function itemNavbar({ href, text, active }){

    const styleDefault = "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
    const styleActive = "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 border-b-4 border-green-500"
   
    return (
        <Link href={href}>
            <a href="" className={active ? styleActive : styleDefault}>{text}</a>
        </Link>
       
    )
}