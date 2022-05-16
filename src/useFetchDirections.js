import { useQuery } from "react-query"

export const useFetchDirections = (route) => {
    const { isLoading, error, data } = useQuery('directionsData', () =>
    fetch(`https://svc.metrotransit.org/nextripv2/directions/${route}`).then(res =>
    res.json()
    )
)
    return {isLoading, error, data}
    
}
