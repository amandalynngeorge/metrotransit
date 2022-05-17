import { useQuery } from "react-query"

export const useFetchStops = (route, direction_id) => {
    const { isLoading, error, data } = useQuery(['stopsData', direction_id], () =>
        fetch(`https://svc.metrotransit.org/nextripv2/stops/${route}/${direction_id}`).then(res =>
        res.json()
        )
    )
    return {isLoading, error, data}
    
}
