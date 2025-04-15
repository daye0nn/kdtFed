import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";

const Wrapper = styled.div`
  color: var(--light-color);
  padding-left: 14px;
`;

const MovieSlide = ({ movies }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Wrapper>
      <Carousel responsive={responsive} infinite={true} autoPlay={true}>
        {movies.results.map((item, index) => (
          <MovieCard key={index} item={item} />
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default MovieSlide;
