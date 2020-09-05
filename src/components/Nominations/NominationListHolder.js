import React, { useState, useEffect } from "react";
import NominationList from "./NominationList";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./NominationListHolder.scss";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function NominationListHolder({
  nominations,
  removeNomination,
  changeNominationOrder,
}) {
  const [state, setState] = useState({ nominations });

  useEffect(() => {
    setState({ nominations });
  }, [nominations]);

  useEffect(() => {
    changeNominationOrder(state.nominations);
  }, [state, changeNominationOrder]);

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

  if (nominations.length < 1)
    return (
      <div className="nomination-list">
        <h2>Nominations</h2>
        <p>No movie has been nominated.</p>
      </div>
    );

  return (
    <section className="section-nomination">
      <h2 className="nomination__header">Nominations</h2>
      <div>Please drag to re-order</div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <div
              className="nomination__body"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <NominationList
                nominations={state.nominations}
                removeNomination={removeNomination}
              />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
}

export default NominationListHolder;
