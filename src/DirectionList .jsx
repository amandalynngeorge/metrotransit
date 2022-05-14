import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { client } from './utils/api'

function DirectionList() {
    function handleChange() {
        console.log('direction')
        //display stops
    }
    return (
        <FormControl fullWidth>
            <InputLabel id='direction-select-label'>Direction</InputLabel>
            <Select
                labelId='direction-select-label'
                id='direction-select'
                value='direction'
                label='direction'
                onChange={handleChange}
            >
                <MenuItem value='north'>Northbound</MenuItem>
            </Select>
        </FormControl>
    )
}

export default DirectionList;