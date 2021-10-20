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

const Homepage = () => {
    const dispatch = useDispatch();
    const movieData = useSelector(getMovieDataSelector);
    const movieLoaded = useSelector(getMovieLoadedSelector);
    console.log(movieLoaded);

    const loadMovie = () => {
        dispatch(movieActions.loadMovieApiAction());
    }

    return (
        <>
            <button onClick={loadMovie}>Show me the movies</button>
            {movieLoaded ?
                <TableContainer component={Paper}>
                    <Table align="center" sx={{ minWidth: 650, maxWidth: 800 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#2bbbad", height: "60px", '&:nth-child(1) th': { fontFamily: "Exo2,Tahoma,Arial", color: "#fff", fontWeight: "800", textTransform: "uppercase" } }}>
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
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:nth-of-type(odd)': { backgroundColor: "rgba(0,0,0,.05)" }, '& td': { fontFamily: "Exo2, sans-serif" }, '&:hover': { backgroundColor: '#e5e5e5', transition: '0.5s ease-out' } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {movie.rank}
                                    </TableCell>
                                    <TableCell align="center"><img style={{ maxWidth: "100%", height: "auto", borderRadius: ".25rem" }} src={movie.image} alt=""></img></TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }} >{movie.title}</TableCell>
                                    <TableCell align="center">{movie.year}</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'light' }}>{movie.crew}</TableCell>
                                    <TableCell align="center">{movie.imDbRating}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> : <></>}

        </>
    );
}


export default Homepage;