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
        borderRight: '2px solid #dfe1e6',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '8px'
      }}>
      <div>{stage.name}</div>
    </div>
  );
}

export default StageItem;
