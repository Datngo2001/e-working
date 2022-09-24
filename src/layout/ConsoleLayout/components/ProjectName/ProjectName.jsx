import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './projectName.module.css';

function ProjectName() {
  const { currentProject } = useSelector((state) => state.project);
  return (
    <div className={styles['container']}>
      <Typography variant="h5" sx={{ textTransform: 'capitalize', wordWrap: 'normal' }}>
        {currentProject?.name}
      </Typography>
    </div>
  );
}

export default ProjectName;
