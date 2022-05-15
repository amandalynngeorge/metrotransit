import React, { useState, useEffect } from "react";
import {useQuery} from "react-query";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Stops from './Stops'

function DirectionList({route}) {
    const [direction, setDirection] = useState('')
   
    useEffect(() => {
        setDirection('')
    },[route])
    
    const { isLoading, error, data } = useQuery('directionsData', () =>
        fetch(`https://svc.metrotransit.org/nextripv2/directions/${route}`).then(res =>
        res.json()
        )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    
    const directions = (
        Array.isArray(data) 
        ? data.map(({direction_id, direction_name})=> ([direction_id, direction_name]))
        : Object.entries(data)).map(([key,value])=> {
            return (
            <MenuItem key={key} value={key}>
                {value}
            </MenuItem>
            )
        })
 
    function handleChange(value) {
        setDirection(value)
    }

    return (
        <>
            <FormControl fullWidth>
                <InputLabel id='direction-select-label'>Direction</InputLabel>
                <Select
                    value={direction}
                    onChange={e => handleChange(e.target.value)}
                >
                {directions}

                </Select>
                { typeof direction === 'number' ? <Stops route={route} direction_id={direction} /> : null}
            </FormControl>
        </>
    )
}

export default DirectionList;