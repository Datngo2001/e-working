import React from 'react';
import { useSelector } from 'react-redux';
import { dateDiffInDays } from '../../../../util/date';

function StageDate({ stage, order }) {
  const {
    ganttChart: { stageRowAt, startColumnAt, startDate }
  } = useSelector((state) => state.stage);

  const gridStartColumn = startColumnAt + dateDiffInDays(startDate, stage.startDate);
  const gridEndColumn = gridStartColumn + dateDiffInDays(stage.endDate, stage.startDate);

  return (
    <div
      style={{
        gridRow: stageRowAt + order,
        gridColumnStart: gridStartColumn,
        gridColumnEnd: gridEndColumn,
        backgroundColor: '#33ccff',
        color: '#ffffff',
        margin: '5px 0px',
        padding: '5px',
        borderRadius: '5px'
      }}>
      {stage.name}
    </div>
  );
}

export default StageDate;
