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
        border: '2px solid #f2f2f2',
        borderLeft: 'none',
        borderBottom: 'none',
        backgroundColor: 'inherit'
      }}
      key={stage._id}>
      {stage.name}
    </div>
  );
}

export default StageItem;
