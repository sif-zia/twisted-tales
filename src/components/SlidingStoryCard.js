import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from "@mui/material";
import { motion } from "framer-motion"

const SlidingStoryCard = ({title, description, imageURL, initiator}) => {
    
    return ( 
        <motion.div whileHover={{ scale: 1.1}} style={{padding:"25px 0px", margin:"0px 12px"}}>
        <Paper elevation={3} 
        sx={{
            "@media (max-width: 600px)": {
              width: "90%",
            },
            "@media (max-width: 300px)": {
              width: "100%",
            },
           
          }}> 
        <Card>
        <CardMedia
          sx={{height: "200px" }}
          component="img"
          alt="story cover"
          image={imageURL}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {title.length > 30 ? title.substring(0, 30) + "..." : title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.length > 50 ? description.substring(0, 50) + "..." : description}
           </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </Paper>
      </motion.div>
    );
}
 
export default SlidingStoryCard ;