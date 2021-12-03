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

    const tableHeaderClass = {
        backgroundColor: '#343a40',
        borderColor: '#454d55',
        border: '1px solid #dee2e6',
        '&>th, th>td': {
            fontFamily: "'Exo 2', 'sans-serif'",
            fontWeight: '800',
            color: '#fff',
            border: '1px solid #dee2e6',

        }
    }

    const tableRowClass = {
        'td': {
            fontFamily: "'Exo 2', 'sans-serif'",
            border: '1px solid #dee2e6',
        },
        'td>span': {
            fontWeight: '800',
        }
    }
    const invisibleCell = {
        backgroundColor: '#fff !important',
        border: 'none !important',
    }


    const ratingCardStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        backgroundColor: '#bdbdbd',
        borderRadius: '0',
        mt: '20px',
        padding: '10px',
        '&>p': {
            fontFamily: "'Exo 2', 'sans-serif'", fontSize: '1.5rem', fontWeight: '800', display: 'flex', gap: '5px', justifyContent: 'center', alignItems: 'center'
        },
        'p>span': { fontSize: '1rem', fontWeight: '300', mt: '5px' }
    }

    const castTitleClass = {
        m: '5px',
        fontFamily: "'Exo 2', 'sans-serif'",
        fontSize: '1.5rem',
        fontWeight: '800'

    }

    const directors = movieInformation.directorList.map(director => director.name);
    const writers = movieInformation.writerList.map(writer => writer.name);

    return (
        <>
            {movieInformation ? <>
                <Grid container>
                    <Grid item lg={4} sm={12}>
                        <CardMedia
                            component='img'
                            src={movie.image}
                            height="352px"
                            width="256px"
                            sx={{ borderBox: 'box-sizing', objectFit: 'contain', borderRadius: ".25rem", aspectRatio: "auto 256 / 352" }} />

                    </Grid>
                    <Grid item lg={8} sm={12}>
                        <Typography sx={{ fontFamily: "'Exo 2', 'sans-serif'", fontSize: '2rem', fontWeight: '900' }}>
                            {movie.title} <span style={{ fontSize: '2rem', fontWeight: '300' }}>({movie.year})</span>
                        </Typography>
                        <hr />
                        <Typography sx={{ fontFamily: "'Exo 2', 'sans-serif'", fontWeight: 'normal' }}>
                            {movieInformation.plot}
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
                                <Typography>{movieInformation.imDbRating} <span>/10</span></Typography>
                                <CardMedia
                                    component='img'
                                    src="https://imdb-api.com/img/icons/Metacritic.png"
                                    height="52"
                                    width="52"
                                    sx={{ borderBox: 'box-sizing', objectFit: 'contain', borderRadius: ".25rem" }} />
                                <Typography>{movieInformation.metacriticRating} <span>%</span></Typography>
                            </Card>
                            <Card sx={{ ...ratingCardStyles }}>
                                <CardMedia
                                    component='img'
                                    src="https://imdb-api.com/img/icons/TheMovieDb.png"
                                    height="52"
                                    width="52"
                                    sx={{ borderBox: 'box-sizing', objectFit: 'contain', borderRadius: ".25rem" }} />
                                <Typography>{movieInformation.ratings.theMovieDb} <span>/10</span> </Typography>
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
                                <Typography>{movieInformation.ratings.filmAffinity} <span>/10</span></Typography>
                            </Card>
                        </Box>
                        <Grid item xs={12} mt={5}>
                            <TableContainer component={Paper}  >
                                <Table align="center">
                                    <TableHead >
                                        <TableRow sx={{ ...tableHeaderClass }}>
                                            <TableCell align="center" colSpan={2}>
                                                CREATORS
                                            </TableCell>
                                            <TableCell align="center" colSpan={2}>
                                                INFORMATION
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody sx={{ 'tr:nth-of-type(odd)': { backgroundColor: "rgba(0,0,0,.05)" } }}>
                                        <TableRow sx={{ ...tableRowClass }}>
                                            <TableCell align="left">
                                                Director
                                            </TableCell>
                                            <TableCell align="left">
                                                <span>{directors}</span>
                                            </TableCell>
                                            <TableCell align="left">
                                                <span>Release Date</span>
                                            </TableCell>
                                            <TableCell align="left">
                                                {movieInformation.releaseDate}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow sx={{ ...tableRowClass, border: '1px solid #dee2e6' }}>
                                            <TableCell align="left">
                                                Writer
                                            </TableCell>
                                            <TableCell align="left">
                                                <span>{writers[0]}</span>
                                            </TableCell>
                                            <TableCell align="left">
                                                <span>Runtime</span>
                                            </TableCell>
                                            <TableCell align="left">
                                                {movieInformation.runtimeStr}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow sx={{ ...tableRowClass }}>
                                            <TableCell align="left">
                                                Writer
                                            </TableCell>
                                            <TableCell align="left">
                                                <span>{writers[1] ? writers[1] : '-'}</span>
                                            </TableCell>
                                            <TableCell align="left">
                                                <span>Genre</span>
                                            </TableCell>
                                            <TableCell align="left">
                                                {movieInformation.genres}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow sx={{ ...tableRowClass }}>
                                            <TableCell align="left" sx={{ ...invisibleCell }}>
                                            </TableCell>
                                            <TableCell align="left" sx={{ ...invisibleCell }}>
                                            </TableCell>
                                            {/* <TableCell rowSpan={5} /> */}
                                            <TableCell align="left">
                                                <span>Content Rating</span>
                                            </TableCell>
                                            <TableCell align="left">
                                                {movieInformation.contentRating}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow sx={{ ...tableRowClass }}>
                                            <TableCell align="left" sx={{ ...invisibleCell }}>
                                            </TableCell>
                                            <TableCell align="left" sx={{ ...invisibleCell }}>
                                            </TableCell>
                                            <TableCell align="left">
                                                <span>Awards</span>
                                            </TableCell>
                                            <TableCell align="left">
                                                {movieInformation.awards}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow sx={{ ...tableRowClass }}>
                                            <TableCell align="left" sx={{ ...invisibleCell }}>
                                            </TableCell>
                                            <TableCell align="left" sx={{ ...invisibleCell }}>
                                            </TableCell>
                                            <TableCell align="left">
                                                <span>Country Rating</span>
                                            </TableCell>
                                            <TableCell align="left">
                                                {movieInformation.countries}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow sx={{ ...tableRowClass }}>
                                            <TableCell align="left" sx={{ ...invisibleCell }}>
                                            </TableCell>
                                            <TableCell align="left" sx={{ ...invisibleCell }}>
                                            </TableCell>
                                            <TableCell align="left">
                                                <span>Company Rating</span>
                                            </TableCell>
                                            <TableCell align="left">
                                                {movieInformation.companies}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow sx={{ ...tableRowClass }}>
                                            <TableCell align="left" sx={{ ...invisibleCell }}>
                                            </TableCell>
                                            <TableCell align="left" sx={{ ...invisibleCell }}>
                                            </TableCell>
                                            <TableCell align="left">
                                                <span>Language Rating</span>
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
                        <Card sx={{ mt: '20px', mb: '0', backgroundColor: '#373a3c', color: '#fff' }} >
                            <Typography sx={{ ...castTitleClass }}>CAST</Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Cast movieInformation={movieInformation} />
                    </Grid>
                </Grid>
            </> : <></>}
        </>
    )
};


export default Information;