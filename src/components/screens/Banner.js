import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../../axios";
import requests from "../../request";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1) + 4
          
        ]
      );
      return request
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <div>
      <Banners
        style={{
          backgroundSize: "Cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundRepeat: "no-repeat" 
        }}
      >
        <BannerContents>
          <Title>{movie?.title || movie?.name || movie?.original_name}</Title>
          <ButtonContainer>
            <PlayButton>Play</PlayButton>
            <ListButton>My List</ListButton>
            <Description>{movie?.overview}</Description>
          </ButtonContainer>
        </BannerContents>
        <BannerFade></BannerFade>
      </Banners>
    </div>
  );
}
export default Banner;

const Banners = styled.header`
    color: #fff;
    object-fit: contain;
    height: 448px;
`;
const BannerContents = styled.div`
    margin-left: 30px;
    padding-top: 140px;
    height: 190px;
`;
const Title = styled.h2`
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
    color: #fff;
`;
const ButtonContainer = styled.div``;
const PlayButton = styled.button`
  margin-right: 10px;
  padding: 6px 25px;
  color: #fff;
  outline: none;
  border: none;
  background-color: rgba(51, 51, 51, 0.5);
  transition: all 0.4s ease;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    transition: all 0.4s ease;
    background-color: #e6e6e6;
    color: #000;
  }
`;
const ListButton = styled.button`
  margin-right: 10px;
  padding: 6px 25px;
  color: #fff;
  outline: none;
  border: none;
  background-color: rgba(51, 51, 51, 0.5);
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 800;
  &:hover {
    transition: all 0.4s ease;
    background-color: #e6e6e6;
    color: #000;
  }
`;
const Description = styled.h4`
    width: 45rem;
    line-height: 1.3;
    padding-top: 1rem;
    font-size: 0.8rem;
    max-width: 360px;
`;
const BannerFade = styled.div`
  height: 128.4px;
  background: linear-gradient(180deg, transparent, #111);
`