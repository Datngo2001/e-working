import { Grid } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { MY_PROJECT_REQUEST } from '../../store/reducer/project/projectActionTypes';
import CreateProjectModal from '../CreateProject/CreateProjectModal';
import CreateProjectButton from './components/CreateProjectButton/CreateProjectButton';
import ProjectCard from './components/ProjectCard/ProjectCard';
import styles from './projectList.module.css';

function ProjectList() {
  const { projectList } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const [isShowModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    dispatch({
      type: MY_PROJECT_REQUEST
    });
  }, [dispatch]);

  return (
    <div className={styles['container']}>
      <h2>Your Project</h2>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={12}>
        <Grid item xs={12} md={6} lg={4} onClick={openModal}>
          <CreateProjectButton />
        </Grid>
        {projectList.map((project, index) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            key={index}
            onClick={() => navigate(`/console/project/${project._id}/stage`)}>
            <ProjectCard name={project.name} />
          </Grid>
        ))}
      </Grid>
      <CreateProjectModal isOpen={isShowModal} closeModal={closeModal} />
    </div>
  );
}

export default ProjectList;
