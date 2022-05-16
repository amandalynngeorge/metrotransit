import React, {useState, useEffect, useRef} from "react";
import {List, ListItem} from '@mui/material'
import { useFetchStops } from "./useFetchStops";

function Stops({route, direction_id}) {
    const [stops, setStops] = useState([])
    console.log('stops', route, direction_id)
    
    useEffect(() => {
        setStops([])
    },[direction_id])

    const { isLoading, error, data } = useFetchStops(route, direction_id)

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    if (stops !== data) {
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
        <>
            <h2>Available Stops</h2>
            <List >
                {stopsList}
            </List>
        </>
    )
}
    

export default Stops;