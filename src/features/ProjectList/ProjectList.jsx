import { Grid } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import CreateProjectModal from '../CreateProject/CreateProjectModal';
import CreateProjectButton from './components/CreateProjectButton/CreateProjectButton';
import ProjectCard from './components/ProjectCard/ProjectCard';
import styles from './projectList.module.css';

const list = [
  { name: 'E-working' },
  { name: 'E-working' },
  { name: 'E-working' },
  { name: 'E-working' },
  { name: 'E-working' },
  { name: 'E-working' },
  { name: 'E-working' }
];

function ProjectList() {
  const [isShowModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles['container']}>
      <h2>Your Project</h2>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={12}>
        <Grid item xs={12} md={6} lg={4} onClick={openModal}>
          <CreateProjectButton />
        </Grid>
        {list.map((project, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <ProjectCard name={project.name} />
          </Grid>
        ))}
      </Grid>
      <CreateProjectModal isOpen={isShowModal} closeModal={closeModal} />
    </div>
  );
}

export default ProjectList;
