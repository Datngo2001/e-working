import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { AppBar, Button } from '@mui/material';
import MenuButton from '../../../components/MenuButton';
import UserMenu from '../../../components/UserMenu';
import Logo from '../../../components/Logo';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Box } from '@mui/system';
import styles from './consoleAppbar.module.css';

function ConsoleAppbar() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const pages = [
    {
      title: 'Home',
      link: '/'
    }
  ];
  const userPages = [
    {
      title: 'Profile',
      link: `/profile/${user?._id}`
    },
    {
      title: 'Setting',
      link: '/setting'
    }
  ];

  return (
    <AppBar position="static">
      <div className={styles['container']}>
        <Toolbar disableGutters>
          <MenuButton pages={pages}></MenuButton>

          <Logo></Logo>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>

          {user ? (
            <UserMenu items={userPages}></UserMenu>
          ) : (
            <Button variant="outlined" color="inherit" onClick={() => navigate('/login')}>
              Login
            </Button>
          )}
        </Toolbar>
      </div>
    </AppBar>
  );
}

export default ConsoleAppbar;
