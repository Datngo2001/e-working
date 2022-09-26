import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { LOAD_PROJECT_REQUEST } from '../../store/reducer/project/projectActionTypes';

function ProjectStagePage() {
  const { id } = useParams();
  const { currentProject } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOAD_PROJECT_REQUEST, payload: id });
  }, [id, currentProject?._id]);

  return (
    <div>
      <h1>Project Stage</h1>
    </div>
  );
}

export default ProjectStagePage;
