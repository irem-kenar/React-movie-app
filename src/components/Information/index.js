import { React, useEffect } from "react";
import { CardMedia, CardContent, Card, Typography, } from "@mui/material";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Cast from "../Cast";


const Information = ({ movie, movieInformation }) => {

    const ratingCardStyles = {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#bdbdbd',
        borderRadius: '0',
        mt: '20px',
        padding: '10px'
    }

    const directors = [movieInformation.directors];
    const writers = [movieInformation];

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
                        We have plot here
                    </Typography>
                    <Box >
                        <Card sx={{ ...ratingCardStyles }}>
                            <CardMedia
                                component='img'
                                src="https://imdb-api.com/img/flags/USA.png"
                                height="40"
                                width="80"
                                sx={{ borderBox: 'box-sizing', objectFit: 'contain', borderRadius: ".25rem" }} />
                            <CardMedia
                                component='img'
                                src="https://imdb-api.com/img/icons/IMDb.png"
                                height="52"
                                width="52"
                                sx={{ borderBox: 'box-sizing', objectFit: 'contain', borderRadius: ".25rem" }} />
                            <Typography>{movieInformation.imDbRating} </Typography>
                            <CardMedia
                                component='img'
                                src="https://imdb-api.com/img/icons/Metacritic.png"
                                height="52"
                                width="52"
                                sx={{ borderBox: 'box-sizing', objectFit: 'contain', borderRadius: ".25rem" }} />
                            <Typography>{movieInformation.metacriticRating} </Typography>
                        </Card>
                        <Card sx={{ ...ratingCardStyles }}>
                            <CardMedia
                                component='img'
                                src="https://imdb-api.com/img/icons/TheMovieDb.png"
                                height="52"
                                width="52"
                                sx={{ borderBox: 'box-sizing', objectFit: 'contain', borderRadius: ".25rem" }} />
                            <Typography>{movieInformation.ratings.theMovieDb} </Typography>
                            <CardMedia
                                component='img'
                                src="https://imdb-api.com/img/icons/RottenTomatoes.png"
                                height="52"
                                width="52"
                                sx={{ borderBox: 'box-sizing', objectFit: 'contain', borderRadius: ".25rem" }} />
                            <Typography>{movieInformation.ratings.rottenTomatoes} </Typography>
                            <CardMedia
                                component='img'
                                src="https://imdb-api.com/img/icons/FilmAffinity.png"
                                height="52"
                                width="52"
                                sx={{ borderBox: 'box-sizing', objectFit: 'contain', borderRadius: ".25rem" }} />
                            <Typography>{movieInformation.ratings.filmAffinity} </Typography>
                        </Card>
                    </Box>
                    <Grid item xs={12} mt={5}>
                        <TableContainer component={Paper} >
                            <Table align="center">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" colSpan={2}>
                                            CREATORS
                                        </TableCell>
                                        <TableCell align="center" colSpan={2}>
                                            INFORMATION
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody sx={{ 'tr:nth-of-type(odd)': { backgroundColor: "rgba(0,0,0,.05)" } }}>
                                    <TableRow>
                                        <TableCell align="left">
                                            Director
                                        </TableCell>
                                        <TableCell align="left">
                                            {movieInformation.directors}
                                        </TableCell>
                                        <TableCell align="left">
                                            Release Date
                                        </TableCell>
                                        <TableCell align="left">
                                            {movieInformation.releaseDate}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell align="left">
                                            Writer
                                        </TableCell>
                                        <TableCell align="left">
                                            {movieInformation.writers}
                                        </TableCell>
                                        <TableCell align="left">
                                            Runtime
                                        </TableCell>
                                        <TableCell align="left">
                                            {movieInformation.runtimeStr}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">
                                            Writer
                                        </TableCell>
                                        <TableCell align="left">
                                            Writer Info
                                        </TableCell>
                                        <TableCell align="left">
                                            Genre
                                        </TableCell>
                                        <TableCell align="left">
                                            {movieInformation.genres}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">
                                        </TableCell>
                                        <TableCell align="left">
                                        </TableCell>
                                        {/* <TableCell rowSpan={5} /> */}
                                        <TableCell align="left">
                                            Content Rating
                                        </TableCell>
                                        <TableCell align="left">
                                            {movieInformation.contentRating}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">
                                        </TableCell>
                                        <TableCell align="left">
                                        </TableCell>
                                        <TableCell align="left">
                                            Awards
                                        </TableCell>
                                        <TableCell align="left">
                                            {movieInformation.awards}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">
                                        </TableCell>
                                        <TableCell align="left">
                                        </TableCell>
                                        <TableCell align="left">
                                            Country Rating
                                        </TableCell>
                                        <TableCell align="left">
                                            {movieInformation.countries}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">
                                        </TableCell>
                                        <TableCell align="left">
                                        </TableCell>
                                        <TableCell align="left">
                                            Company Rating
                                        </TableCell>
                                        <TableCell align="left">
                                            {movieInformation.companies}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">
                                        </TableCell>
                                        <TableCell align="left">
                                        </TableCell>
                                        <TableCell align="left">
                                            Language Rating
                                        </TableCell>
                                        <TableCell align="left">
                                            {movieInformation.languages}
                                        </TableCell>
                                    </TableRow>

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Cast movieInformation={movieInformation} />
                </Grid>
            </Grid>
        </>
    )
};


export default Information;