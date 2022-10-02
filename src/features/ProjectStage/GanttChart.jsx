import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_STAGE_REQUEST } from '../../store/reducer/stage/stageActionTypes';
import styles from './ganttChart.module.css';
import DateRow from './components/DateRow/DateRow';
import Stage from './components/Stage/Stage';
import Today from './components/Today/Today';

function GanttChart() {
  const dispatch = useDispatch();
  const { currentProject } = useSelector((state) => state.project);
  const {
    stages,
    ganttChart: { totalDate }
  } = useSelector((state) => state.stage);

  useEffect(() => {
    if (currentProject) {
      dispatch({ type: LOAD_STAGE_REQUEST, payload: currentProject._id });
    }
  }, [currentProject?._id]);

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
