import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import DirectionsList from './DirectionsList'
import { useFetchRoutes } from "./useFetchRoutes";

function RouteList() {
    const [value, setValue] = useState('')
    const { isLoading, error, data } = useFetchRoutes()
 
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    
    function handleChange(value) {
        setValue(value)
    }
    
    const routes = (
        Array.isArray(data) 
        ? data.map(({route_id, route_label})=> ([route_id, route_label]))
        : Object.entries(data)).map(([key,value])=> {
            return (
                <MenuItem key={key + value} value={key} >
                {value}
            </MenuItem>
            )
        })

    return (
        
            <FormControl fullWidth>
                <InputLabel id='route-select-label' label='Select'>Routes</InputLabel>
                <Select
                    value={value}
                    onChange={e => handleChange(e.target.value)}
                >
                {routes}
                </Select>
                    { value ? <DirectionsList route={value}/> : null}
            </FormControl>
    )
}

export default RouteList;