import React from "react";
import {List, ListItem} from '@mui/material'

function Stops() {
    const options = [{"place_code":"MAAM","description":"Mall of America Transit Station"},{"place_code":"77PO","description":"Portland Ave and 77th St"},{"place_code":"66PO","description":"Portland Ave and 66th St"},{"place_code":"56CH","description":"Chicago Ave and 56th St"},{"place_code":"46CH","description":"Chicago Ave and 46th St"},{"place_code":"42CH","description":"42nd St and Chicago Ave"},{"place_code":"CHLA","description":"Chicago Lake Transit Center"},{"place_code":"8SCH","description":"Chicago Ave and 8th St"},{"place_code":"7SNI","description":"7th St & Nicollet Station"},{"place_code":"7SOL","description":"7th St and Olson Memorial Hwy"},{"place_code":"EMBD","description":"Emerson Ave and W Broadway Ave"},{"place_code":"26PN","description":"26th Ave and Penn Ave"},{"place_code":"33FM","description":"33rd Ave and Fremont Ave"},{"place_code":"43FM","description":"Fremont Ave and 43rd Ave"},{"place_code":"47OS","description":"Osseo Rd and 47th Ave"},{"place_code":"BCTC","description":"Brooklyn Center Transit Center"}]
    
    const stops = (
        Array.isArray(options) 
        ? options.map(({place_code, description})=> ([place_code, description]))
        : Object.entries(options)).map(([key,value])=> {
            return (
            <ListItem key={key} value={key}>
                {value}
            </ListItem>
            )
        })
    return (
        <List>
        {stops}

        </List>
    )
}
    

export default Stops;