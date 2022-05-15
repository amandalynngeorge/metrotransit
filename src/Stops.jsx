import React, {useState, useEffect} from "react";
import {List, ListItem} from '@mui/material'
import {useQuery} from 'react-query'

function Stops({route, direction_id}) {
    console.log('stops recieves', route, direction_id)
    const [stops, setStops] = useState([])
    
    useEffect(() => {
        console.log('reset')
        setStops([])
    },[direction_id])

    const { isLoading, error, data } = useQuery('stopsData', () =>
        fetch(`https://svc.metrotransit.org/nextripv2/stops/${route}/${direction_id}`).then(res =>
        res.json()
        )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    if (stops !== data) {
        console.log('setnew data')
        setStops(data)
    } 
    

    const stopsList = (
        Array.isArray(stops) 
        ? stops.map(({place_code, description})=> ([place_code, description]))
        : Object.entries(stops)).map(([key,value])=> {
            return (
            <ListItem key={key} value={key}>
                {value}
            </ListItem>
            )
        })
    return (
        <List>
            {stopsList}
        </List>
    )
}
    

export default Stops;