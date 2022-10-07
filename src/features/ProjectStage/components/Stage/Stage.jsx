import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { STAGE_STARTDATE_UPDATE_REQUEST } from '../../../../store/reducer/stage/stageActionTypes';
import { convertDDMMYYYY, dateDiffInDays } from '../../../../util/date';
import styles from './stage.module.css';

function Stage({ stage, row }) {
  // const dispatch = useDispatch();
  const {
    ganttChart: { startColumnAt, startDate }
  } = useSelector((state) => state.stage);

  const [startColumn, setStartColumn] = useState(
    startColumnAt + dateDiffInDays(stage.startDate, startDate)
  );
  const [endColumn, setEndColumn] = useState(
    startColumn + dateDiffInDays(stage.endDate, stage.startDate) + 1
  );

  const handleStartDrag = () => {
    let X = null;
    return (e) => {
      if (X == null) {
        X = e.pageX;
        return;
      }

      if (e.pageX == 0) return;

      // to right
      if (e.pageX - X > 30) {
        setStartColumn((val) => val + 1);

        stage.startDate.setDate(stage.startDate.getDate() + 1);
        // dispatch({
        //   type: STAGE_STARTDATE_UPDATE_REQUEST,
        //   payload: { id: stage._id, date: stage.startDate }
        // });
      }
      // to left
      if (e.pageX - X < -30) {
        setStartColumn((val) => val - 1);

        stage.startDate.setDate(stage.startDate.getDate() - 1);
        // dispatch({
        //   type: STAGE_STARTDATE_UPDATE_REQUEST,
        //   payload: { id: stage._id, date: stage.startDate }
        // });
      }
    };
  };

  const handleEndDrag = () => {
    let X = null;
    return (e) => {
      if (X == null) {
        X = e.pageX;
        return;
      }

      if (e.pageX == 0) return;

      // to right
      if (e.pageX - X > 30) {
        setEndColumn((val) => val + 1);
      }
      // to left
      if (e.pageX - X < -30) {
        setEndColumn((val) => val - 1);
      }
    };
  };

  return (
    <div
      style={{
        gridRow: row,
        gridColumnStart: startColumn,
        gridColumnEnd: endColumn,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        zIndex: 1
      }}>
      <div className={styles['stage']}>
        <div className={styles['start-date']}>{convertDDMMYYYY(stage.startDate)}</div>
        <div className={styles['end-date']}>{convertDDMMYYYY(stage.endDate)}</div>
        <button
          className={styles['start-button']}
          onDragCapture={handleStartDrag()}
          draggable></button>
        <button className={styles['end-button']} onDragCapture={handleEndDrag()} draggable></button>
      </div>
    </div>
  );
}

export default Stage;
