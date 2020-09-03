import React from "react";
import { Draggable } from "react-beautiful-dnd";

function NominationListItem({ movie, removeNomination, index }) {
  return (
    <Draggable draggableId={movie.id} index={index}>
      {(provided) => (
        <div
          className="nomation__item"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {movie.movie.Title}
          {movie.movie.Year}
          <button
            className="nomination__item__button"
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
