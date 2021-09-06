import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Canvas } from 'Components/layers/Canvas/Canvas';

import { ElementsToolbox } from '../ElementsToolbox/ElementsToolbox';

export const Edit = () => {
  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    console.log(result);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="edit">
        <ElementsToolbox />
        <Canvas />
      </div>
    </DragDropContext>
  );
};
