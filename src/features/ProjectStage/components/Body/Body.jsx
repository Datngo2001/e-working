import React from 'react';
import { useSelector } from 'react-redux';
import Stage from '../Stage/Stage';
import StageItem from '../StageItem/StageItem';
import styles from './body.module.css';

function Body() {
  const {
    stages,
    ganttChart: { totalDate, stageRowAt }
  } = useSelector((state) => state.stage);

  return (
    <div className={styles['body']}>
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
  );
}

export default Body;
