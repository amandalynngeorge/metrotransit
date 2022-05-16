import { useQuery } from "react-query"

export const useFetchRoutes = () => {
    const { isLoading, error, data } = useQuery('routeData', () =>
    fetch('https://svc.metrotransit.org/nextripv2/routes').then(res =>
      res.json()
    )
  )
    return {isLoading, error, data}
    
}
