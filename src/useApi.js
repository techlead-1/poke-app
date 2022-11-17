import { useEffect, useState } from "react"

const useApi = (url) => {
    const [poke, setPoke] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
        .then(response => {
            if(!response.ok) {
                throw Error('Cant get pokemons')
            }
            return response.json()
        })
        .then(data => {
            setLoading(false)
            setPoke(data)
            setError(null)
        })
        .catch(err => {
            setLoading(null)
            setError(err.message)
        })
    }, [url])

    return {loading, error, poke}
}
export default useApi