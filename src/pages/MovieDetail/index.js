import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../../shared/store/actions/movie.action";
import { movieInformationActions } from "../../shared/store/actions/movieInformation.action";
import { getMovieDataSelector, getMovieLoadedSelector } from "../../shared/store/selectors/movie.selector";
import { getMovieInformationSelector, getMovieInformationLoadedSelector } from "../../shared/store/selectors/movieInformation.selector";
import Information from "../../components/Information";
import { CardMedia, CardContent, Card, Typography, } from "@mui/material";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";


const MovieDetail = (props) => {

    useEffect(() => {
        loadMovie();
    }, [])

    const dispatch = useDispatch();
    const movieData = useSelector(getMovieDataSelector);
    const movieLoaded = useSelector(getMovieLoadedSelector);
    const movieInformation = useSelector(getMovieInformationSelector);
    const movieInformationLoaded = useSelector(getMovieInformationLoadedSelector);

    const loadMovie = () => {
        dispatch(movieActions.loadMovieApiAction());
        dispatch(movieInformationActions.loadMovieInformationApiAction(props.match.params.id));
    }

    const getMovieInformation = () => {
        return (!!movieData.items ? movieData.items.filter(movie => movie.id === props.match.params.id)[0] : "")
    }

    const movie = getMovieInformation();
    const cardStyles = {
        width: "146px",
        height: "146px",
        backgroundColor: "#2bbbad",
        borderRadius: ".125rem",
        boxShadow: "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
        margin: "0.375rem",
        "&:hover": { boxShadow: "0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%)" },
    }

    const typographyStyles = {
        fontFamily: "'Exo 2', 'sans-serif'",
        fontWeight: "bold",
        color: "#fff",
    }

    const iconStyles = {
        background: "url(https://imdb-api.com/img/icons/movie-nav-icons.png) no-repeat",
        height: '50px',
        width: '50px',
        display: "inline-block",
        mt: "1.5rem",
        border: "none"
    }

    if (Object.keys(movieData).length < 1 || Object.keys(movieInformation).length < 1) {
        return (<div>loading...</div>);
    }

    return (
        <>
            {movieLoaded && movieInformationLoaded ? <>
                <Box width="80%" margin="auto">
                    <Card sx={{ mb: '1.5rem', position: 'relative' }}>
                        <CardMedia
                            component='img'
                            image='https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80'
                            height='130'
                            mb='100'
                            sx={{ borderRadius: ".25rem", boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)' }} />
                        <CardContent sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                            <Typography noWrap variant="h1" sx={{
                                fontFamily: "'Exo 2', 'sans-serif'",
                                fontWeight: '800',
                                fontSize: '2rem',
                                background: "-webkit-linear-gradient(45deg, #FFF 50%, #000 55%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}>
                                {movie.title} ({movie.year})
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ flexGrow: 1, boxShadow: "none" }}>
                        <Grid container>
                            <Grid item md={3} sx={{ ...cardStyles, backgroundColor: "#ec407a", opacity: ".65" }}>
                                <CardMedia
                                    component='div'
                                    sx={{ ...iconStyles, backgroundPosition: "-0 -50px" }}
                                />
                                <Typography sx={{ ...typographyStyles }}>INFORMATION</Typography>
                            </Grid>
                            <Grid item md sx={{ ...cardStyles }}>
                                <CardMedia
                                    component='div'
                                    sx={{ ...iconStyles, backgroundPosition: "-0 -0" }}
                                />
                                <Typography sx={{ ...typographyStyles }}>FULL CASTS</Typography>
                            </Grid>
                            <Grid item md sx={{ ...cardStyles }}>
                                <CardMedia
                                    component='div'
                                    sx={{ ...iconStyles, backgroundPosition: "-50px -50px" }}
                                />
                                <Typography sx={{ ...typographyStyles }}>POSTERS</Typography>
                            </Grid>
                            <Grid item md sx={{ ...cardStyles }}>
                                <CardMedia
                                    component='div'
                                    sx={{ ...iconStyles, background: "url(https://imdb-api.com/img/icons/images.png) no-repeat" }}
                                />
                                <Typography sx={{ ...typographyStyles }}>IMAGES</Typography>
                            </Grid>
                            <Grid item xs sx={{ ...cardStyles }}>
                                <CardMedia
                                    component='div'
                                    sx={{ ...iconStyles, backgroundPosition: "-0 -150px" }}
                                />
                                <Typography sx={{ ...typographyStyles }}>TRAILER</Typography>
                            </Grid>
                            <Grid item xs sx={{ ...cardStyles }}>
                                <CardMedia
                                    component='div'
                                    sx={{ ...iconStyles, backgroundPosition: "-0 -100px" }}
                                />
                                <Typography sx={{ ...typographyStyles }}>REPORT</Typography>
                            </Grid>
                        </Grid>
                    </Card>
                    <hr style={{ margin: "1rem 0", border: "0", borderTop: "1px solid rgba(0,0,0,.1)" }} />
                    <Information props={props} movie={movie} movieInformation={movieInformation} movieInformationLoaded={movieInformationLoaded} />
                </Box>
            </> : <></>
            }
        </>
    );
}


export default MovieDetail;


