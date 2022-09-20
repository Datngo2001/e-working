import React from 'react';
import ProjectList from '../../features/CreateProject/ProjectList';
import styles from './projectListPage.module.css';
function ProjectListPage() {
  return (
    <div className={styles['container']}>
      <ProjectList />
    </div>
  );
}

export default ProjectListPage;
