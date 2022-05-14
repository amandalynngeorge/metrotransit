// import { useQuery } from "react-query"
// const apiURL = 'http://svc.metrotransit.org/NexTrip'

// function Client() {
//     const config = {
//         method: 'GET',
//         mode: 'cors',
//         headers: {
//           'Content-Type': "application/json",
//           'Accept': "application/json",
//           'Access-Controll-Allow-Origin': '*'
//         }
//       }
//     const { isLoading, error, data } = useQuery('data', () => 
//       fetch(`${apiURL}/Routes`).then(response => response.json())
//     )

//     if (isLoading) return 'Loading...'
//     if (error) return 'Error: ' + error.message

//     return (
//         console.log('data', data)
//     )
// }
    
//     export {Client}  