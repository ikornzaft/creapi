import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export const BaseElement = ({ elementId, label, index = 0 }) => {
  return (
    // random draggableId and index just for testing porpouses
    <Draggable draggableId={elementId} index={index}>
      {(provided) => (
        <div
          className="component-palette__generic-edition-component"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {label}
        </div>
      )}
    </Draggable>
  );
};
