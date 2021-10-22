import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { movieActions } from "../../shared/store/actions/movie.action";
import { getMovieDataSelector, getMovieLoadedSelector } from "../../shared/store/selectors/movie.selector";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { CardMedia, CardContent, Card, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";



const Homepage = () => {
    const dispatch = useDispatch();
    const movieData = useSelector(getMovieDataSelector);
    const movieLoaded = useSelector(getMovieLoadedSelector);

    const loadMovie = () => {
        dispatch(movieActions.loadMovieApiAction());
    }

    return (
        <>
            <button onClick={loadMovie}>Show me top 250 movies</button>
            {movieLoaded ? <>
                <Card sx={{ width: '80%', margin: 'auto', mb: '1.5rem', position: 'relative' }}>
                    <CardMedia
                        component='img'
                        image='https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80'
                        height='130'
                        mb='100'
                        sx={{ borderRadius: ".25rem", boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)' }} />
                    <CardContent sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <Typography variant="h1" sx={{
                            fontFamily: "'Exo 2', 'sans-serif'",
                            fontWeight: '800',
                            fontSize: '3.5rem',
                            background: "-webkit-linear-gradient(45deg, #FFF 50%, #000 55%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                            Top 250 Movies
                        </Typography>
                    </CardContent>
                </Card>
                <TableContainer component={Paper}>
                    <Table align="center" sx={{ minWidth: 650, width: '80%' }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#2bbbad", height: "60px", '&:nth-child(1) th': { fontFamily: "'Exo 2', 'sans-serif'", color: "#fff", fontWeight: "800", textTransform: "uppercase" } }}>
                                <TableCell align="center">Rank</TableCell>
                                <TableCell align="center">Image</TableCell>
                                <TableCell align="center">Title</TableCell>
                                <TableCell align="center">Year</TableCell>
                                <TableCell align="center">Cast</TableCell>
                                <TableCell align="center">IMDB Rating</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {movieData.items.map((movie) => (
                                <TableRow
                                    key={movie.rank}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:nth-of-type(odd)': { backgroundColor: "rgba(0,0,0,.05)" }, '& td': { fontFamily: "'Exo 2', 'sans-serif'", height: '190px' }, '&:hover': { backgroundColor: '#e5e5e5', transition: '0.5s ease-out' } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {movie.rank}
                                    </TableCell>
                                    <TableCell align="center">
                                        <CardMedia
                                            component='img'
                                            image={movie.image}
                                            alt='movie image'
                                            sx={{ '&': { maxWidth: "100%", height: "auto", borderRadius: ".25rem", borderBox: 'box-sizing', objectFit: 'contain', transition: 'all 0.3s linear' }, '&:hover': { transform: 'scale(1.1)' } }}
                                        ></CardMedia>
                                    </TableCell>
                                    <Link to={`/movieDetail/${movie.rank}`}>
                                        <TableCell align="center" sx={{ fontWeight: 'bold' }} >{movie.title}</TableCell>
                                    </Link>
                                    <TableCell align="center">{movie.year}</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'light' }}>{movie.crew}</TableCell>
                                    <TableCell alidn='center' >
                                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <StarRateRoundedIcon sx={{ color: '#fb3', mb: '5px', mr: '5px' }} />
                                            {movie.imDbRating}
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer></> : <></>
            }

        </>
    );
}


export default Homepage;