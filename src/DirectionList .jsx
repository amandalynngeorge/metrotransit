import React, { useState } from "react";
import {useQuery} from "react-query";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Client } from "./utils/api";
import Stops from './Stops'

function DirectionList() {
//     const { isLoading, error, data } = useQuery('repoData', () =>
//      fetch('http://svc.metrotransit.org/NexTrip/Routes').then(res =>
//        res.json()
//      )
//    )
 
//    if (isLoading) return 'Loading...'
 
//    if (error) return 'An error has occurred: ' + error.message

    const [value, setValue] = useState('')

    function handleChange(value) {
        setValue(value)
    }
 
   const options = [
    {
    Text: "Northbound",
    Value: "0"
    },
    {
    Text: "Southbound",
    Value: "1"
    }
    ]

    const routes = (
        Array.isArray(options) 
        ? options.map(({Value, Text})=> ([Value, Text]))
        : Object.entries(options)).map(([key,value])=> {
            return (
            <MenuItem key={key} value={key}>
                {value}
            </MenuItem>
            )
        })
 

    return (
        <>
            <FormControl fullWidth>
                <InputLabel id='direction-select-label'>Direction</InputLabel>
                <Select
                    value={value}
                    onChange={e => handleChange(e.target.value)}
                >
                {routes}

                </Select>
                {value ? <Stops /> : null}
            </FormControl>
        </>
    )
}

export default DirectionList;