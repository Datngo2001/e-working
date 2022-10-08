import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import KanBanBoard from '../../features/KanBanBoard/KanBanBoard';
import { LOAD_PROJECT_REQUEST } from '../../store/reducer/project/projectActionTypes';

function ProjectBoardPage() {
  const { id } = useParams();
  const { currentProject } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOAD_PROJECT_REQUEST, payload: id });
  }, []);

  return (
    <div className="custom-scroll" style={{ height: '100%' }}>
      {currentProject?._id == id && <KanBanBoard projectId={id} />}
    </div>
  );
}

export default ProjectBoardPage;
