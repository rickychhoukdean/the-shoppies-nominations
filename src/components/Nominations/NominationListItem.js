import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./NominationListItem.scss";

function NominationListItem({ movie, removeNomination, index }) {
  return (
    <Draggable draggableId={movie.id} index={index}>
      {(provided) => (
        <div
          style={{ colsor: `url(${movie.movie.Poster})` }}
          className="nomination__item"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {movie.movie.Title} ({movie.movie.Year})
          <button
            className="nomination__button"
            onClick={() => {
              removeNomination(movie.movie.imdbID);
            }}
          >
            Remove
          </button>
        </div>
      )}
    </Draggable>
  );
}

export default NominationListItem;
