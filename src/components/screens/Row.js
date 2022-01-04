import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../../axios";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

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
            className={`rowposter ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </RowPosters>
    </div>
  );
}

const MainTitle = styled.h2`
    
`;
const RowPosters = styled.div`
  width: 100%;
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  &::-webkit-scrollbar{
      display: none;
  }
`;