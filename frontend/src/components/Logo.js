import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Logo = ({logoColor}) => {
    const navigate = useNavigate();
    return ( 
        <Typography color={logoColor? logoColor : "white"} onClick={()=>navigate('/')} sx={{fontSize:"30px",  fontFamily:'"Dosis", sans-serif', cursor: "pointer"}} >Twisted Tales</Typography>
     );
}
 
export default Logo;