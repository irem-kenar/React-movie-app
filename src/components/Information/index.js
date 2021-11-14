import { React, useEffect } from "react";
import { CardMedia, CardContent, Card, Typography, } from "@mui/material";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";


const Information = ({ movie, movieInformation }) => {

    return (
        <>
            <Grid container>
                <Grid item xs={4}>
                    <CardMedia
                        component='img'
                        src={movie.image}
                        height="352px"
                        width="256px"
                        sx={{ borderBox: 'box-sizing', objectFit: 'contain', borderRadius: ".25rem", aspectRatio: "auto 256 / 352" }} />

                </Grid>
                <Grid item xs={8}>
                    <Typography>
                        {movie.title} ({movie.year})
                    </Typography>
                    <hr />
                    <Typography>
                        {movieInformation.plot}
                    </Typography>
                    <Box>
                        <CardMedia
                            component='img'
                            src="https://imdb-api.com/img/flags/USA.png"
                            height="40"
                            width="80"
                            sx={{ borderBox: 'box-sizing', objectFit: 'contain', borderRadius: ".25rem" }} />

                    </Box>
                </Grid>
            </Grid>
        </>
    )
};


export default Information;