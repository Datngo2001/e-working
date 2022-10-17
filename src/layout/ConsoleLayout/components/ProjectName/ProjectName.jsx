import { IconButton, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from './projectName.module.css';

function ProjectName() {
  const { currentProject } = useSelector((state) => state.project);
  return (
    <div className={styles['container']}>
      <Typography
        variant="h5"
        sx={{ textTransform: 'capitalize', wordWrap: 'normal', marginRight: 'auto' }}>
        {currentProject?.name}
      </Typography>
      <IconButton>
        <SettingsIcon />
      </IconButton>
    </div>
  );
}

export default ProjectName;
