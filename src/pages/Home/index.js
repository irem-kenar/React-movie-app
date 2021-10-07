import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { movieActions } from "../../shared/store/actions/movie.action";
import { getMovieDataSelector, getMovieLoadedSelector } from "../../shared/store/selectors/movie.selector";

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
            {movieLoaded ? movieData.items.map(movie => (<>
                <div>{movie.rank}</div>
                <div>{movie.title} ({movie.year}) </div>
                <img src={movie.image} alt=""></img>
                <div>{movie.crew} </div>
                <div>{movie.imDbRating} </div>
            </>)) : <></>}
        </>
    )
}

export default Homepage;