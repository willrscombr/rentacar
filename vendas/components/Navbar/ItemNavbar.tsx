import Link  from 'next/link'
import { useRouter } from 'next/router'
export default function itemNavbar({ href, text }){
    const router = useRouter();
    const active = router.asPath === href ? true: false
    const styleDefault = "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
    const styleActive = "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 border-b-4 border-green-500"
    return (
        <Link href={href}>
            <a href="" className={active == true ? styleActive : styleDefault}>{text}</a>
        </Link>
       
    )
}