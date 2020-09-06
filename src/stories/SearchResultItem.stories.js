import React from "react";

import SearchResultItem from "../components/Search/SearchResults/SearchResultItem";
import "../App.scss";

export default {
  title: "Example/SearchResultItem",
  component: SearchResultItem,
};

const Template = (args) => <SearchResultItem {...args} />;

export const NoPoster = Template.bind({});
NoPoster.args = {
  movie: {
    Title: "A Poke in the Eye Redux",
    Year: "2015",
    imdbID: "tt4695304",
    Type: "movie",
    Poster: "N/A",
  },
};

export const Poster = Template.bind({});
Poster.args = {
  movie: {
    Title: "The Karate Kid",
    Year: "2010",
    imdbID: "tt1155076",
    Type: "movie",
    Poster:
    "https://m.media-amazon.com/images/M/MV5BNTkyOTFlYzQtODNhYi00NjM3LTljMjMtYjExZTM2MTlhMmRkXkEyXkFqcGdeQXVyMjExNzc3Mzc@._V1_SX300.jpg",
  },
};
