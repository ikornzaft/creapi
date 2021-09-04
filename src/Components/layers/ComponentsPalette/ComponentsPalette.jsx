import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { GenericEditionElement } from 'Components/basic/GenericEditionElement/GenericEditionElement';

export const ComponentsPalette = () => {
  return (
    <Droppable droppableId="palette">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} className="components-palette">
          <GenericEditionElement />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
