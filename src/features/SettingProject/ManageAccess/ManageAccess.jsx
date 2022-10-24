import {
  Avatar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack
} from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { LOAD_PROJECT_MEMBERS_REQUEST } from '../../../store/reducer/project/projectActionTypes';

function ManageAccess() {
  const dispatch = useDispatch();
  const { currentProject, members } = useSelector((state) => state.project);

  useEffect(() => {
    dispatch({
      type: LOAD_PROJECT_MEMBERS_REQUEST,
      payload: currentProject._id
    });
  }, []);

  return (
    <Stack>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4>Manage Access</h4>
        <Button size="small" variant="contained" color="secondary">
          Add Member
        </Button>
      </Box>
      <List>
        {members.map((member) => (
          <ListItem
            key={member._id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }>
            <ListItemAvatar>
              <Avatar src={member.picture}></Avatar>
            </ListItemAvatar>
            <ListItemText primary={member.name} />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}

export default ManageAccess;
