import { React } from "react";
import { CardMedia, CardContent, Card, Typography, Box } from "@mui/material";
import Grid from '@mui/material/Grid';

const Cast = ({ movieInformation }) => {
    const actor = movieInformation.actorList;
    const cardStyles = {
        border: '1px solid #dee2e6',
        boxSizing: 'border-box',
        p: '20px'
    }

    const castStyles = {
        fontFamily: "'Exo 2', 'sans-serif'",
        fontSize: '1rem',

    }

    return (
        <>
            <Box>
                <Grid container spacing={2} mt={10}>
                    {actor.map(actor =>
                        <Grid item xs={4}>
                            <Card sx={{ ...cardStyles }}>
                                <CardMedia
                                    component='img'
                                    image={actor.image}
                                    height='176'
                                    width='128'
                                    p='10'
                                    sx={{ borderBox: 'box-sizing', objectFit: 'contain', borderRadius: ".25rem !important", aspectRatio: "auto 128 / 176" }}
                                />
                                <CardContent >
                                    <Typography variant="p" align='center' display='block' sx={{ ...castStyles, fontWeight: 'bold' }}>
                                        {actor.name}
                                    </Typography>
                                    <Typography variant="p" align='center' sx={{ ...castStyles }}>
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