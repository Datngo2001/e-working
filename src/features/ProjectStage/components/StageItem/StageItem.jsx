import React from 'react';

function StageItem({ stage, row }) {
  return (
    <div
      style={{
        gridColumn: 1,
        gridRow: row,
        position: 'sticky',
        left: 0,
        zIndex: 3,
        backgroundColor: 'inherit',
        borderRight: '2px solid #dfe1e6'
      }}>
      {stage.name}
    </div>
  );
}

export default StageItem;
