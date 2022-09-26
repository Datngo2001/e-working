import React from 'react';
import { dateDiffInDays } from '../../../../util/date';

function StageDate({ stage, projectStartDate, row }) {
  const gridStartColumn = dateDiffInDays(projectStartDate, stage.startDate) + 1;
  const gridEndColumn = gridStartColumn + dateDiffInDays(stage.endDate, stage.startDate) - 1;

  return (
    <div
      style={{
        gridColumnStart: gridStartColumn,
        gridColumnEnd: gridEndColumn,
        gridRow: row,
        backgroundColor: '#33ccff',
        color: '#ffffff',
        margin: '5px',
        padding: '5px',
        borderRadius: '5px'
      }}>
      {stage.name}
    </div>
  );
}

export default StageDate;
