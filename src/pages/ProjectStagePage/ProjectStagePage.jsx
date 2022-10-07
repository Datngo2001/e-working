import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { LOAD_PROJECT_REQUEST } from '../../store/reducer/project/projectActionTypes';
import GanttChart from '../../features/ProjectStage/GanttChart';

function ProjectStagePage() {
  const { id } = useParams();
  const { currentProject } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOAD_PROJECT_REQUEST, payload: id });
  }, []);

  return (
    <div style={{ height: '100%' }}>
      {currentProject?._id == id && <GanttChart projectId={id} />}
    </div>
  );
}

export default ProjectStagePage;
