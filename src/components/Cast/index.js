import { React } from "react";
import { CardMedia, CardContent, Card, Typography, Box } from "@mui/material";
import Grid from '@mui/material/Grid';

const Cast = ({ movieInformation }) => {
    const actor = movieInformation.actorList

    return (
        <>
            <Box>
                <Grid container spacing={2} mt={10}>
                    {actor.map(actor =>
                        <Grid item xs={4}>
                            <Card >
                                <CardMedia
                                    component='img'
                                    image={actor.image}
                                    height='176'
                                    width='128'
                                    p='10'
                                    sx={{ borderBox: 'box-sizing', objectFit: 'contain', borderRadius: ".25rem", aspectRatio: "auto 128 / 176" }}
                                />
                                <CardContent >
                                    <Typography variant="p" align='center' display='block'>
                                        {actor.name}
                                    </Typography>
                                    <Typography variant="p" align='center'>
                                        {actor.asCharacter}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>)
                    }
                </Grid>
            </Box>
        </>
    )
}

export default Cast;