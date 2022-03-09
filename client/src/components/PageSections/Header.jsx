import {
  Avatar,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import CartIcon from '../Cart/CartIcon';
import UserBadge from '../UserBadge';

const buttonStyles = {
  size: 'md',
  width: '150px',
};

const navLinksStyles = {
  color: 'black',
  variant: 'link',
  fontWeight: 'semibold',
};
const Header = () => {
  const navigate = useNavigate();
  const userDetails = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : {};

  function emailUsername(emailAddress) {
    return emailAddress.match(/^(.+)@/)[1];
  }
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        height="12vh"
        width="100vw"
        px="5vw"
      >
        <Logo />
        <HStack
          spacing="5vw"
          display={['none', 'none', 'none', 'flex', 'flex']}
        >
          <Button onClick={() => navigate('/')} {...navLinksStyles}>
            Home
          </Button>
          <Button onClick={() => navigate('/about')} {...navLinksStyles}>
            About Us
          </Button>
          <Button onClick={() => navigate('/products')} {...navLinksStyles}>
            Products
          </Button>
          <Button onClick={() => navigate('/contact')} {...navLinksStyles}>
            Contact Us
          </Button>
        </HStack>
        <ButtonGroup
          alignItems="end"
          display={['none', 'none', 'none', 'flex', 'flex']}
        >
          {userDetails?.token ? (
            <UserBadge userDetails={userDetails} />
          ) : (
            <Button
              onClick={() => navigate('/login')}
              variant="ghost"
              {...buttonStyles}
              _hover={{ bg: 'brand.300', color: 'white' }}
            >
              Register / Sign in
            </Button>
          )}
          <CartIcon
            number={3}
            color={'black'}
            // handleOpenCart={() => onOpen()}
          />
        </ButtonGroup>

        {/* Responsive screen */}
        <Menu>
          <MenuButton display={['flex', 'flex', 'flex', 'none', 'none']}>
            <HStack>
              <Text>{emailUsername(`${userDetails?.email}`)}</Text>
              <Avatar size="sm" mr="3" src={userDetails?.profile_pic} />
            </HStack>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => navigate('/')}>Äccount</MenuItem>
            <MenuDivider />
            <MenuItem onClick={() => navigate('/')}>Home</MenuItem>
            <MenuItem onClick={() => navigate('/about')}>About Us</MenuItem>
            <MenuItem onClick={() => navigate('/products')}>Products</MenuItem>
            <MenuItem onClick={() => navigate('/contact')}>Contact Us</MenuItem>
            <MenuDivider />
            {!userDetails?.token ? (
              <>
                <MenuItem onClick={() => navigate('/login')}>Login</MenuItem>
                <MenuItem onClick={() => navigate('/client/signup')}>
                  SignUp
                </MenuItem>
              </>
            ) : (
              <MenuItem onClick={() => navigate('/login')}>Logout</MenuItem>
            )}
          </MenuList>
        </Menu>
      </Flex>
      {/* <Cart isOpen={isOpen} onClose={onClose} /> */}
    </>
  );
};

export default Header;
