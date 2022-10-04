import React from 'react';
import { useSelector } from 'react-redux';
import { convertDDMMYYYY, dateDiffInDays } from '../../../../util/date';
import styles from './stage.module.css';

function Stage({ stage, row }) {
  const {
    ganttChart: { startColumnAt, startDate }
  } = useSelector((state) => state.stage);

  const gridStartColumn = startColumnAt + dateDiffInDays(stage.startDate, startDate);
  const gridEndColumn = gridStartColumn + dateDiffInDays(stage.endDate, stage.startDate);

  return (
    <div
      style={{
        gridRow: row,
        gridColumnStart: gridStartColumn,
        gridColumnEnd: gridEndColumn,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        zIndex: 1
      }}>
      <div className={styles['stage']}>
        <div className={styles['start-date']}>{convertDDMMYYYY(stage.startDate)}</div>
        <div className={styles['end-date']}>{convertDDMMYYYY(stage.endDate)}</div>
        <button className={styles['start-button']}></button>
        <button className={styles['end-button']}></button>
      </div>
    </div>
  );
}

export default Stage;
