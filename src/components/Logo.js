import React from "react";
import { Typography } from "@mui/material";
const Logo = ({logoColor}) => {
    return ( 
        <Typography color={logoColor? logoColor : "white"} sx={{fontSize:"30px",  fontFamily:'"Dosis", sans-serif'}} >Twisted Tales</Typography>
     );
}
 
export default Logo;