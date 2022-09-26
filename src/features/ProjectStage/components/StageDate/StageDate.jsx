import React from 'react';
import { dateDiffInDays } from '../../../../util/date';

function StageDate({ stage, projectStartDate, order }) {
  const gridStartColumn = dateDiffInDays(projectStartDate, stage.startDate) + 1;
  const gridEndColumn = gridStartColumn + dateDiffInDays(stage.endDate, stage.startDate) - 1;

  return (
    <div
      style={{
        gridColumnStart: gridStartColumn,
        gridColumnEnd: gridEndColumn,
        gridRow: order,
        backgroundColor: '#33ccff',
        color: '#ffffff'
      }}>
      {stage.name}
    </div>
  );
}

export default StageDate;
