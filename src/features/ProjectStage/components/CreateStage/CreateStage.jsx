import { Button } from '@mui/material';
import React from 'react';

function CreateStage({ row }) {
  return (
    <div
      style={{
        gridColumn: 1,
        gridRow: row,
        position: 'sticky',
        left: 0,
        zIndex: 3,
        backgroundColor: 'inherit',
        borderRight: '2px solid #dfe1e6'
      }}>
      <Button variant="text">Create Stage</Button>
    </div>
  );
}

export default CreateStage;
