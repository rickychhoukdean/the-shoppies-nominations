import React, { useState, useEffect } from "react";
import NominationList from "./NominationList";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function NominationListHolder({ nominations, removeNomination }) {
  const [state, setState] = useState({ nominations });

  useEffect(() => {
    setState({ nominations });
  }, [nominations]);

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const nominations = reorder(
      state.nominations,
      result.source.index,
      result.destination.index
    );

    setState({ nominations });
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <NominationList
              nominations={state.nominations}
              removeNomination={removeNomination}
            />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default NominationListHolder;
