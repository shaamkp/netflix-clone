import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl]=useState("")

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height : "390",
    width : "100%",
    playerVars :{
      autoplay:'1',
    }
  }

  const handleClick = (movie) =>{
    if(trailerUrl){
      setTrailerUrl("");
    }else{
      movieTrailer(movie?.name || "")
      .then(url => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'))

      }).catch(error => console.log(error));
    }
  }

  console.log(movies);
  return (
    <div className="row">
      <MainTitle>{title}</MainTitle>
      <RowPosters>
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
            className={`rowposter ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </RowPosters>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

const MainTitle = styled.h2`
    color: #fff;
    font-weight: 800;
    margin-left: 15px;
    margin-top: 10px;
`;
const RowPosters = styled.div`
  width: 95%;
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  z-index: -5;
  &::-webkit-scrollbar{
      display: none;
  }
`;