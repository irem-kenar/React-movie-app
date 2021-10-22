import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../../shared/store/actions/movie.action";
import { getMovieDataSelector, getMovieLoadedSelector } from "../../shared/store/selectors/movie.selector";
import { CardMedia, CardContent, Card, Typography, } from "@mui/material";

const MovieDetail = (props) => {
    useEffect(() => {
        loadMovie();
    }, [])
    const dispatch = useDispatch();
    const movieData = useSelector(getMovieDataSelector);
    const movieLoaded = useSelector(getMovieLoadedSelector);

    const loadMovie = () => {
        dispatch(movieActions.loadMovieApiAction());
    }

    return (
        <>
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
                            movie name will be here
                        </Typography>
                    </CardContent>
                </Card>
            </> : <></>
            }
        </>
    );
}


export default MovieDetail;


