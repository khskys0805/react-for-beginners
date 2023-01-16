import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
function Detail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movieInfo, setMovieInfo] = useState([]);
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovieInfo(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        loading
            ? <h1>Loading</h1>
            : <MovieDetail
                url={movieInfo.url}
                year={movieInfo.year} 
                rating={movieInfo.rating}
                coverImg={movieInfo.medium_cover_image}
                title={movieInfo.title_long}
                summary={movieInfo.description_full}
                genres={movieInfo.genres} />
    );
}
export default Detail;