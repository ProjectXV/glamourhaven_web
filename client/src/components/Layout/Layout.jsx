import { Box, Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../PageSections/Sidebar';
import TopBar from '../PageSections/TopBar';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  React.useEffect(() => {
    const user = localStorage.getItem('userInfo').token
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null;

    if (user === null || undefined) {
      const navigate = useNavigate();
      navigate('/acount/login');
    }
  }, [third]);

  return (
    <HStack spacing={0} overflowX={'hidden'} overflowY={'hidden'}>
      <Sidebar />
      <Flex bg="#F9F9F9" direction="column" maxWidth="85vw" h="100vh">
        <TopBar />
        <Box overflowY="hidden" h="89.5vh" p={5}>
          <Outlet />
        </Box>
      </Flex>
    </HStack>
  );
};

export default Layout;
