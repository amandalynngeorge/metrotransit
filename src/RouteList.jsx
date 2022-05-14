import React from "react";
import {useQuery} from "react-query";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { client } from "./utils/api";

function RouteList() {
    const {data: listRoutes} = useQuery({
        queryKey: 'list-routes',
        queryFn: () => client('Routes').then(data => data.listRoutes)
    })
    console.log(listRoutes)

    function handleChange() {
        console.log('route')
        //fill direction selector
    }

    return (
        <FormControl fullWidth>
            <InputLabel id='route-select-label'>Routes</InputLabel>
            <Select
                labelId='route-select-label'
                id='route-select'
                value='route'
                label='Route'
                onChange={handleChange}
            >

                <MenuItem value='firstroute'>FirstRoute</MenuItem>
            </Select>
        </FormControl>
    )
}

export default RouteList;