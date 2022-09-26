import React from 'react';

function StageDate({ stage, projectStartDate, order }) {
  const startDate = new Date(stage.startDate);
  const endDate = new Date(stage.endDate);
  const gridStartColumn = Math.round((startDate - projectStartDate) / (1000 * 60 * 60 * 24)) + 1;
  const totalDate = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
  console.log(gridStartColumn);
  return (
    <div
      style={{
        gridColumnStart: gridStartColumn,
        gridColumnEnd: gridStartColumn + totalDate,
        gridRow: order,
        backgroundColor: '#33ccff',
        color: '#ffffff'
      }}>
      {stage.name}
    </div>
  );
}

export default StageDate;
