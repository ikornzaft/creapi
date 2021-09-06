import React from 'react';
import { nanoid } from 'nanoid';
import { Droppable } from 'react-beautiful-dnd';
import { BaseElement } from 'Components/dragAndDrop/BaseElement/BaseElement';

export const ElementsToolbox = () => {
  const elementsArray = [
    {
      elementId: `text-${nanoid()}`,
      label: 'Text Field',
    },
    {
      elementId: `input-${nanoid()}`,
      label: 'Input Field',
    },
  ];

  return (
    <Droppable droppableId="palette">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} className="components-palette">
          {elementsArray.map((element, index) => (
            <BaseElement
              key={index}
              elementId={element.elementId}
              label={element.label}
              index={index}
            />
          ))}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
