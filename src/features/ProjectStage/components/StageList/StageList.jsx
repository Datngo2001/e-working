import React from 'react';
import { useSelector } from 'react-redux';

function StageList() {
  const {
    stages,
    ganttChart: { stageRowAt }
  } = useSelector((state) => state.stage);
  return (
    <>
      <div
        style={{
          gridColumn: 1,
          gridRowStart: 1,
          gridRowEnd: stageRowAt + stages.length + 1,
          position: 'sticky',
          left: 0,
          zIndex: 2,
          backgroundColor: '#ffffff',
          border: '2px solid #f2f2f2',
          borderTop: 'none',
          borderLeft: 'none'
        }}></div>
      {stages.map((stage, i) => (
        <div
          style={{
            gridColumn: 1,
            gridRow: stageRowAt + i,
            position: 'sticky',
            left: 0,
            zIndex: 2,
            backgroundColor: '#ffffff',
            border: '2px solid #f2f2f2',
            borderLeft: 'none',
            borderBottom: 'none'
          }}
          key={stage._id}>
          {stage.name}
        </div>
      ))}
    </>
  );
}

export default StageList;
