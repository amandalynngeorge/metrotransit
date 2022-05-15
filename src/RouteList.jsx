import React, { useState } from "react";
import {useQuery} from "react-query";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import DirectionList from "./DirectionList ";
import {QueryClientProvider, useQueryClient} from 'react-query';

function RouteList() {

    const queryClient = useQueryClient()
    const [value, setValue] = useState('')
    
    const { isLoading, error, data } = useQuery('routeData', () =>
     fetch('https://svc.metrotransit.org/nextripv2/routes').then(res =>
       res.json()
     )
   )
 
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
            <MenuItem key={key} value={key}>
                {value}
            </MenuItem>
            )
        })
 

    return (
        <QueryClientProvider client={queryClient}>
            <FormControl fullWidth>
                <InputLabel id='route-select-label' label='Select'>Routes</InputLabel>
                <Select
                    value={value}
                    onChange={e => handleChange(e.target.value)}
                >
                {routes}
                </Select>
                    { value ? <DirectionList route={value}/> : null}
            </FormControl>
        </QueryClientProvider>
    )
}

export default RouteList;