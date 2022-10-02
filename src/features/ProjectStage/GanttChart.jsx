import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CLEAR_STAGES, LOAD_STAGE_REQUEST } from '../../store/reducer/stage/stageActionTypes';
import styles from './ganttChart.module.css';
import DateRow from './components/DateRow/DateRow';
import Stage from './components/Stage/Stage';
import Today from './components/Today/Today';

function GanttChart({ projectId }) {
  const dispatch = useDispatch();
  const {
    stages,
    ganttChart: { totalDate }
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
          gridTemplateColumns: `repeat(${totalDate + 2}, 30px )`,
          overflow: 'auto',
          padding: '10px',
          height: '100%'
        }}>
        <DateRow />
        {stages.map((stage, index) => (
          <Stage key={stage._id} stage={stage} order={index} />
        ))}
        <Today />
      </div>
    </div>
  );
}

export default GanttChart;
