import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./NominationListItem.scss";
import placeholderImage from "../../placeholder.png";

function NominationListItem({ movie, removeNomination, index }) {
  return (
    <Draggable draggableId={movie.id} index={index}>
      {(provided) => (
        <div
          className="nomination__item"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <img
            className="nomination__picture"
            alt={`Poster for ${movie.movie.Title}`}
            src={movie.movie.Poster !== "N/A" ? movie.movie.Poster : placeholderImage}
          />
          <div className="nomination__text">
            <a
              href={`https://www.imdb.com/title/${movie.movie.imdbID}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="result__url"
            >
              {movie.movie.Title}
            </a>{" "}
            ({movie.movie.Year})
            <button
              className="nomination__button nomination__button--center"
              onClick={() => {
                removeNomination(movie.movie.imdbID);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default NominationListItem;

// <div className="result__item">
// <img
// className="result__picture"
// alt={`Poster for ${movie.Title}`}
// src={movie.Poster !== "N/A" ? movie.Poster : placeholderImage}
// ></img>
// <div className="result__text">
// <a
//   href={`https://www.imdb.com/title/${movie.imdbID}/`}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="result__url"
// >
//   {movie.Title}
// </a>{" "}
// ({movie.Year})
// <button
//   className="result__button"
//   disabled={picked}
//   onClick={() => nominate(movie)}
// >
//   Nominate
// </button>
// </div>
// </div>
