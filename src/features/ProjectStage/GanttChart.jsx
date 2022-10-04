import React, { useEffect } from 'react';
import styles from './ganttChart.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { CLEAR_STAGES, LOAD_STAGE_REQUEST } from '../../store/reducer/stage/stageActionTypes';
import DateRow from './components/DateRow/DateRow';
import Stage from './components/Stage/Stage';
import Today from './components/Today/Today';
import StageItem from './components/StageItem/StageItem';

function GanttChart({ projectId }) {
  const dispatch = useDispatch();
  const {
    stages,
    ganttChart: { totalDate, stageRowAt }
  } = useSelector((state) => state.stage);

  useEffect(() => {
    dispatch({ type: LOAD_STAGE_REQUEST, payload: projectId });
    return () => {
      dispatch({ type: CLEAR_STAGES });
    };
  }, [projectId]);

  return (
    <div className={styles['container']}>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: `35px 25px repeat(${stages.length}, 45px) auto`,
          gridTemplateColumns: `300px repeat(${totalDate + 1}, 30px )`,
          overflow: 'auto',
          height: '100%',
          position: 'relative',
          padding: '10px 0px 0px 0px'
        }}>
        <DateRow />
        <div className={styles['all-stages']}>
          {stages.map((stage, index) => (
            <div key={stage._id} className={styles['stage-row']}>
              <StageItem stage={stage} row={stageRowAt + index} />
              <Stage stage={stage} row={stageRowAt + index} />
              <div
                style={{
                  backgroundColor: 'inherit',
                  gridRow: stageRowAt + index,
                  gridColumnStart: 1,
                  gridColumnEnd: totalDate + 3,
                  height: '100%'
                }}></div>
            </div>
          ))}
        </div>
        <Today />
      </div>
    </div>
  );
}

export default GanttChart;
