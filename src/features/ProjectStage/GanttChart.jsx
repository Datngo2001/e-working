import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StageDate from './components/StageDate/StageDate';
import { LOAD_STAGE_REQUEST } from '../../store/reducer/stage/stageActionTypes';
import { dateDiffInDays } from '../../util/date';
import styles from './ganttChart.module.css';

function GanttChart() {
  let projectStartDate;
  let projectEndDate;
  let totalDate;

  const { currentProject } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const { stages } = useSelector((state) => state.stage);

  projectStartDate = stages[0]?.startDate;
  stages.forEach((stage) => {
    if (stage.startDate < projectStartDate) {
      projectStartDate = stage.startDate;
    }
  });

  projectEndDate = stages[0]?.endDate;
  stages.forEach((stage) => {
    if (stage.endDate > projectEndDate) {
      projectEndDate = stage.endDate;
    }
  });

  totalDate = dateDiffInDays(projectEndDate, projectStartDate);

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
          gridTemplateColumns: `repeat(${totalDate}, 20px )`,
          overflow: 'auto'
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
