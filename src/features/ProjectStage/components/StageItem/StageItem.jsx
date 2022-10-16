import { IconButton, ListItem, ListItemText, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import styles from './stageItem.module.css';
import { useDispatch } from 'react-redux';
import { DELETE_STAGE_REQUEST } from '../../../../store/reducer/stage/stageActionTypes';

function StageItem({ stage, row }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch({ type: DELETE_STAGE_REQUEST, payload: stage._id });
  };

  return (
    <ListItem
      className={styles['stage']}
      style={{
        gridColumn: 1,
        gridRow: row,
        position: 'sticky',
        left: 0,
        zIndex: 3,
        backgroundColor: 'inherit',
        borderRight: '2px solid #dfe1e6',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '8px'
      }}>
      <Tooltip title={stage.name}>
        <ListItemText sx={{ overflow: 'hidden' }} primary={stage.name} />
      </Tooltip>
      <div className={styles['button-group']}>
        <IconButton edge="end" aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
    </ListItem>
  );
}

export default StageItem;
