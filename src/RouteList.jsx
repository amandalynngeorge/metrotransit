import React, { useState } from "react";
import {useQuery} from "react-query";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Client } from "./utils/api";
import DirectionList from "./DirectionList ";

function RouteList() {
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
    Description: "METRO Blue Line",
    ProviderID: "0",
    Route: "901"
    },
    {
    Description: "METRO Green Line",
    ProviderID: "0",
    Route: "902"
    },
    {
    Description: "Airport Shuttle",
    ProviderID: "10",
    Route: "906"
    },
    {
    Description: "METRO Red Line",
    ProviderID: "0",
    Route: "903"
    },
    {
    Description: "METRO Orange Line",
    ProviderID: "0",
    Route: "904"
    },
    {
    Description: "METRO A Line",
    ProviderID: "0",
    Route: "921"
    },
    {
    Description: "METRO C Line",
    ProviderID: "0",
    Route: "923"
    },
    {
    Description: "Route 2",
    ProviderID: "0",
    Route: "2"
    },
    {
    Description: "Route 3",
    ProviderID: "0",
    Route: "3"
    },
    {
    Description: "Route 4",
    ProviderID: "0",
    Route: "4"
    },
    {
    Description: "Route 5",
    ProviderID: "0",
    Route: "5"
    },
    {
    Description: "Route 6",
    ProviderID: "0",
    Route: "6"
    },
    {
    Description: "Route 7",
    ProviderID: "0",
    Route: "7"
    },
    {
    Description: "Route 9",
    ProviderID: "0",
    Route: "9"
    },
    {
    Description: "Route 10",
    ProviderID: "0",
    Route: "10"
    },
    {
    Description: "Route 11",
    ProviderID: "0",
    Route: "11"
    },
    {
    Description: "Route 14",
    ProviderID: "0",
    Route: "14"
    },
    {
    Description: "Route 17",
    ProviderID: "0",
    Route: "17"
    },
    {
    Description: "Route 18",
    ProviderID: "0",
    Route: "18"
    },
    {
    Description: "Route 21",
    ProviderID: "0",
    Route: "21"
    },
    {
    Description: "Route 22",
    ProviderID: "0",
    Route: "22"
    },
    {
    Description: "Route 23",
    ProviderID: "0",
    Route: "23"
    },
    {
    Description: "Route 25",
    ProviderID: "0",
    Route: "25"
    },
    {
    Description: "Route 30",
    ProviderID: "2",
    Route: "30"
    },
    {
    Description: "Route 32",
    ProviderID: "0",
    Route: "32"
    },
    {
    Description: "Route 33",
    ProviderID: "2",
    Route: "33"
    },
    {
    Description: "Route 54",
    ProviderID: "0",
    Route: "54"
    },
    {
    Description: "Route 61",
    ProviderID: "0",
    Route: "61"
    },
    {
    Description: "Route 62",
    ProviderID: "0",
    Route: "62"
    },
    {
    Description: "Route 63",
    ProviderID: "0",
    Route: "63"
    },
    {
    Description: "Route 64",
    ProviderID: "0",
    Route: "64"
    },
    {
    Description: "Route 65",
    ProviderID: "0",
    Route: "65"
    },
    {
    Description: "Route 67",
    ProviderID: "2",
    Route: "67"
    },
    {
    Description: "Route 68",
    ProviderID: "0",
    Route: "68"
    },
    {
    Description: "Route 70",
    ProviderID: "0",
    Route: "70"
    },
    {
    Description: "Route 71",
    ProviderID: "0",
    Route: "71"
    },
    {
    Description: "Route 74",
    ProviderID: "0",
    Route: "74"
    },
    {
    Description: "Route 80",
    ProviderID: "2",
    Route: "80"
    },
    {
    Description: "Route 83",
    ProviderID: "2",
    Route: "83"
    },
    {
    Description: "Route 87",
    ProviderID: "2",
    Route: "87"
    },
    {
    Description: "Route 219",
    ProviderID: "2",
    Route: "219"
    },
    {
    Description: "Route 225",
    ProviderID: "2",
    Route: "225"
    },
    {
    Description: "Route 227",
    ProviderID: "2",
    Route: "227"
    },
    {
    Description: "Route 323",
    ProviderID: "2",
    Route: "323"
    },
    {
    Description: "Route 420",
    ProviderID: "3",
    Route: "420"
    },
    {
    Description: "Route 440",
    ProviderID: "3",
    Route: "440"
    },
    {
    Description: "Route 442",
    ProviderID: "3",
    Route: "442"
    },
    {
    Description: "Route 444",
    ProviderID: "3",
    Route: "444"
    },
    {
    Description: "Route 445",
    ProviderID: "3",
    Route: "445"
    },
    {
    Description: "Route 447",
    ProviderID: "3",
    Route: "447"
    },
    {
    Description: "Route 495",
    ProviderID: "3",
    Route: "495"
    },
    {
    Description: "Route 497",
    ProviderID: "3",
    Route: "497"
    },
    {
    Description: "Route 499",
    ProviderID: "3",
    Route: "499"
    },
    {
    Description: "Route 515",
    ProviderID: "0",
    Route: "515"
    },
    {
    Description: "Route 534",
    ProviderID: "2",
    Route: "534"
    },
    {
    Description: "Route 538",
    ProviderID: "2",
    Route: "538"
    },
    {
    Description: "Route 539",
    ProviderID: "2",
    Route: "539"
    },
    {
    Description: "Route 540",
    ProviderID: "2",
    Route: "540"
    },
    {
    Description: "Route 546",
    ProviderID: "2",
    Route: "546"
    },
    {
    Description: "Route 612",
    ProviderID: "0",
    Route: "612"
    },
    {
    Description: "Route 615",
    ProviderID: "2",
    Route: "615"
    },
    {
    Description: "Route 645",
    ProviderID: "0",
    Route: "645"
    },
    {
    Description: "Route 716",
    ProviderID: "2",
    Route: "716"
    },
    {
    Description: "Route 721",
    ProviderID: "0",
    Route: "721"
    },
    {
    Description: "Route 722",
    ProviderID: "0",
    Route: "722"
    },
    {
    Description: "Route 723",
    ProviderID: "0",
    Route: "723"
    },
    {
    Description: "Route 724",
    ProviderID: "0",
    Route: "724"
    },
    {
    Description: "Route 804",
    ProviderID: "2",
    Route: "804"
    },
    {
    Description: "Route 805",
    ProviderID: "2",
    Route: "805"
    },
    {
    Description: "Route 852",
    ProviderID: "0",
    Route: "852"
    }
    ]

    const routes = (
        Array.isArray(options) 
        ? options.map(({Route, Description})=> ([Route, Description]))
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
                <InputLabel id='route-select-label' label='Select'>Routes</InputLabel>
                <Select
                    value={value}
                    onChange={e => handleChange(e.target.value)}
                >
                {routes}

                </Select>
                { value ? <DirectionList /> : null}
            </FormControl>
        </>
    )
}

export default RouteList;