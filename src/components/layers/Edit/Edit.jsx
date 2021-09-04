import React from 'react';

import { ComponentsPalette } from '../ComponentsPalette/ComponentsPalette';
import { Canvas } from '../Canvas/Canvas';

export const Edit = () => {
  return (
    <div className="edit">
      <ComponentsPalette />
      <Canvas />
    </div>
  );
};
