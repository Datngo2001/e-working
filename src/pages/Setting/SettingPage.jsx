import { Button, Container } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { useDispatch } from 'react-redux';
import { SIGNOUT_REQUEST } from '../../store/reducer/user/userActionTypes';
function SettingPage() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: SIGNOUT_REQUEST });
  };
  return (
    <div>
      <Container maxWidth="xs" sx={{ marginTop: '30px' }}>
        <Stack spacing={2}>
          <Button onClick={handleLogout} variant="contained" sx={{ margin: 'auto', width: '100' }}>
            Logout
          </Button>
        </Stack>
      </Container>
    </div>
  );
}

export default SettingPage;
