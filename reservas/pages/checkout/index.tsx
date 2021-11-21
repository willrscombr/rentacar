import { useRouter } from 'next/router'
export default function Checkout(){
    const router = useRouter()
    const { slug } = router.query
    return <>SLUG: {slug}</>
}