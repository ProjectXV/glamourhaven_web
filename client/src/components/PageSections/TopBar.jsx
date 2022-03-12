import {
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Spacer,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { MdNotifications } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import CartIcon from '../Cart/CartIcon';
// import Cart from '../../pages/Products/Cart';
import { useDisclosure } from '@chakra-ui/react';
import notifications from '../../data/notifications.json';
import { useOutsideClick } from '@chakra-ui/react';
import UserBadge from '../UserBadge';
import NotificationItem from '../NotificationItem';

const TopBar = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  // const CartQuantity = cartItems.reduce(
  //   (cartTotalQuantity, item) => cartTotalQuantity + item.quantity,
  //   0,
  // );
  const [show, setShow] = useState(false);
  const ref = React.useRef();

  useOutsideClick({
    ref: ref,
    handler: () => setShow(false),
  });

  // function emailUsername(emailAddress) {
  //   return emailAddress.match(/^(.+)@/)[1];
  // }

  const userDetails = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

  return (
    <>
      <Flex py={3} px={5} alignItems="center" w="85vw" bg="white" h="10vh">
        <VStack alignItems="left" spacing="3px">
          <HStack>
            <Text fontSize="1.5em">Welcome Back, </Text>
            <Text fontWeight="bold" fontSize="1.5em" color="brand.300">
              {/* {emailUsername(`${userDetails?.email}`)} */} admin
            </Text>
          </HStack>
          <Text fontSize="0.7em">
            Check out todays stats Check out todays stats Check out todays stats
          </Text>
        </VStack>
        <Spacer />
        <HStack spacing="30px" mr={3} alignItems="baseline">
          {show ? (
            <InputGroup>
              <InputLeftElement>
                <FiSearch />
              </InputLeftElement>
              <Input
                borderRadius="50px"
                placeholder="Search...."
                ref={ref}
                width="400px"
              />
            </InputGroup>
          ) : (
            <Icon
              as={FiSearch}
              h={5}
              w={5}
              cursor="pointer"
              onClick={() => setShow(true)}
            />
          )}
          <CartIcon
            number={3}
            color={'black'}
            handleOpenCart={() => onOpen()}
          />
          <Popover isLazy>
            <PopoverTrigger>
              <Tag rounded="2xl" h="8px" cursor="pointer" flexShrink={0}>
                <HStack>
                  <Icon as={MdNotifications} />
                  <Text>12</Text>
                </HStack>
              </Tag>
            </PopoverTrigger>
            <PopoverContent zIndex="100" width="400px">
              <PopoverHeader textAlign="left" fontWeight="semibold">
                Notifications
              </PopoverHeader>
              <PopoverBody>
                {notifications?.slice(0, 4).map(notification => {
                  return (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                    />
                  );
                })}
                <Text>View all</Text>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </HStack>
        <HStack>
          {userDetails.token ? <UserBadge userDetails={userDetails} /> : null}
        </HStack>
      </Flex>
      {/* <Cart isOpen={isOpen} onClose={onClose} /> */}
    </>
  );
};

export default TopBar;
