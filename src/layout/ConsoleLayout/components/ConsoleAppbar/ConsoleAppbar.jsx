import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { AppBar, Button } from '@mui/material';
import MenuButton from '../../../components/MenuButton';
import LinkGroup from '../../../components/LinkGroup';
import UserMenu from '../../../components/UserMenu';
import Logo from '../../../components/Logo';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

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
      <Container maxWidth="">
        <Toolbar disableGutters>
          <MenuButton pages={pages}></MenuButton>

          <Logo></Logo>

          <LinkGroup pages={pages}></LinkGroup>
          {user ? (
            <UserMenu items={userPages}></UserMenu>
          ) : (
            <Button variant="outlined" color="inherit" onClick={() => navigate('/login')}>
              Login
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ConsoleAppbar;
