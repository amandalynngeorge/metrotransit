import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Stops from './Stops'
import { useFetchDirections } from "./useFetchDirections";

function DirectionsList({route}) {
    const [direction, setDirection] = useState('')
    console.log('direction', route, direction)
   
    useEffect(() => {
        setDirection('')
    },[route])
    
    const { isLoading, error, data } = useFetchDirections(route)

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
    console.log(directions)
    function handleChange(value) {
        setDirection(value)
    }

    return (
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
    )
}

export default DirectionsList;