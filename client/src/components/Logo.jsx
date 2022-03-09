import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo-colored.svg';
import logoAlt from '../assets/Logo-white.svg';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Flex
      flexShrink={0}
      onClick={() => navigate('/')}
      _hover={{ cursor: 'pointer' }}
    >
      <Image src={logo} minW="12vw" maxW="12vw" />
    </Flex>
  );
};

export const LogoAlt = () => {
  const navigate = useNavigate();
  return (
    <Box onClick={() => navigate('/')} _hover={{ cursor: 'pointer' }}>
      <Image src={logoAlt} w="12vw" />
    </Box>
  );
};

export default Logo;
