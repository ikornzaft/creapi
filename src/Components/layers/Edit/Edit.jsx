import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { ComponentsPalette } from 'Components/layers/ComponentsPalette/ComponentsPalette';
import { Canvas } from 'Components/layers/Canvas/Canvas';

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
