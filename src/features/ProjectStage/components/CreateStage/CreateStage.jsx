import { Button, IconButton, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function CreateStage({ row }) {
  const [isShowForm, setIsShowForm] = useState(false);

  const handleCreateClick = () => {
    setIsShowForm(true);
  };

  const handleClose = () => {
    setIsShowForm(false);
  };

  return (
    <div
      style={{
        gridColumn: 1,
        gridRow: row,
        position: 'sticky',
        left: 0,
        zIndex: 4,
        backgroundColor: 'inherit',
        borderRight: '2px solid #dfe1e6',
        display: 'flex',
        alignItems: 'center'
      }}>
      {isShowForm ? (
        <div style={{ display: 'flex', position: 'relative', backgroundColor: '#f2f2f2' }}>
          <TextField size="small" />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              transform: 'translateY(100%)',
              display: 'flex'
            }}>
            <IconButton size="small">
              <CheckIcon />
            </IconButton>
            <IconButton size="small" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
      ) : (
        <Button
          variant="text"
          sx={{ width: '100%', justifyContent: 'flex-start' }}
          onClick={handleCreateClick}>
          Create Stage
        </Button>
      )}
    </div>
  );
}

export default CreateStage;
