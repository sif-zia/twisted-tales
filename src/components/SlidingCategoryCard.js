import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import { Stack } from '@mui/material';
import { Box } from "@mui/material";
import { motion } from "framer-motion"

const SlidingCategoryCard = ({ title, NoOfStories, NoOfReads, imageURL }) => {
    return (
        <Box style={{ margin: "11px" }}>
            <Card sx={{ height: "95%" }}>
                <motion.div whileHover={{ scale: 1.1 }}  >
                    <CardMedia sx={{ height: "150px",overflow:"hidden"}}
                        component="img"
                        alt="story cover"
                        image={imageURL}
                    />
                </motion.div>
                <CardContent>
                    <Grid container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid xs={12} display="flex" justifyContent="center" alignItems="center" mb="10px" mt="10px" >
                            <Typography variant="h5">{title} </Typography>
                        </Grid>
                        <Grid xs={12} display="flex" justifyContent="center" alignItems="center" >
                            <Stack direction="row"   >
                                <Box style={{ borderRight: '2px solid #ddd', padding: "0px 5px" }}>
                                    <Typography variant="subtitle1" color="#6b726e">{NoOfStories} Stories</Typography>
                                </Box>
                                {/* <Divider orientation="vertical" variant="middle" flexItem sx={{height:"100%"}}/> */}
                                <Box style={{ paddingLeft: "5px" }}>
                                    <Typography variant="subtitle1" color="#6b726e">{NoOfReads} Reads</Typography>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
}

export default SlidingCategoryCard;