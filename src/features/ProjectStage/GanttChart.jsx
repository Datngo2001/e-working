import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StageDate from './components/StageDate/StageDate';
import { LOAD_STAGE_REQUEST } from '../../store/reducer/stage/stageActionTypes';
import styles from './ganttChart.module.css';

function GanttChart() {
  const { currentProject } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  let projectStartDate;
  let projectEndDate;
  let totalDate;
  const { stages } = useSelector((state) => state.stage);

  projectStartDate = new Date(stages[0]?.startDate);
  stages.forEach((stage) => {
    if (new Date(stage.startDate) < projectStartDate) {
      projectStartDate = stage.startDate;
    }
  });

  projectEndDate = new Date(stages[0]?.endDate);
  stages.forEach((stage) => {
    if (new Date(stage.endDate) > projectEndDate) {
      projectEndDate = stage.endDate;
    }
  });

  totalDate = Math.round((projectEndDate - projectStartDate) / (1000 * 60 * 60 * 24));

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
          gridTemplateRows: '30px',
          gridTemplateColumns: `repeat(${totalDate}, 20px )`
        }}>
        {stages.map((stage, index) => (
          <StageDate
            key={stage._id}
            stage={stage}
            order={index + 1}
            projectStartDate={projectStartDate}
          />
        ))}
      </div>
    </div>
  );
}

export default GanttChart;
