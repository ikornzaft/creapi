import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

export const Canvas = () => {
  return (
    <Droppable droppableId="canvas">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} className="canvas">
          CANVAS
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
