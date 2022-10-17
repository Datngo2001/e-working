import { Paper } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import SettingField from './SettingField/SettingField';

function SettingProject() {
  return (
    <Container maxWidth="md" sx={{ marginTop: '30px' }}>
      <Paper>
        <SettingField />
      </Paper>
    </Container>
  );
}

export default SettingProject;
