import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { ComponentsPalette } from '../ComponentsPalette/ComponentsPalette';
import { Canvas } from '../Canvas/Canvas';

export const Edit = () => {
  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    console.log(result);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="edit">
        <ComponentsPalette />
        <Canvas />
      </div>
    </DragDropContext>
  );
};
