import React from 'react';
import { useSelector } from 'react-redux';
import { convertDDMMYYYY, dateDiffInDays } from '../../../../util/date';
import styles from './stage.module.css';

function Stage({ stage, order }) {
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
        gridColumnEnd: gridEndColumn
      }}>
      <div className={styles['stage']}>
        <div>{stage.name}</div>
        <div className={styles['start-date']}>{convertDDMMYYYY(stage.startDate)}</div>
        <div className={styles['end-date']}>{convertDDMMYYYY(stage.endDate)}</div>
      </div>
    </div>
  );
}

export default Stage;
