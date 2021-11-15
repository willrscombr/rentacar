export const fetcher = (url : string) => fetch(url).then(r => r.json())
const  refreshInterval = 3000 

export default {refreshInterval,fetcher}