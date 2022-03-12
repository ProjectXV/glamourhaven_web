import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Select,
  SimpleGrid,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import signupImage from '../../assets/SignUpPicture.svg';
import illustration from '../../assets/Mobile login-pana.svg';
import AuthLeftContainer from '../../components/PageSections/AuthLeftContainer';

const CompleteProfile = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [show, setShow] = useState(false);
  const [checkedItems, setCheckedItems] = React.useState([false, false]);
  const handleShowPassword = () => {
    setShow(!show);
  };

  const handleEnterKey = event => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <SimpleGrid columns={[null, null, null, 2]} height="100vh">
      {/* Left side */}

      <AuthLeftContainer image={signupImage} illustration={illustration} />

      {/* Right side */}
      <Box pl="3vw" overflowY="scroll">
        <HStack mt="3vh" ml="57%" mb="3vh">
          <Button
            color="#555555"
            variant="link"
            onClick={() => navigate('/account/login')}
          >
            <Text>Already have an account? </Text>
            <Text ml="0.3vw" color="brand.300" fontWeight="500">
              Sign in
            </Text>
          </Button>
        </HStack>
        <Stack width="70%">
          <Text align="left" fontSize="2rem">
            Complete Profile
          </Text>
          <Text align="left" color="gray.300" fontSize="0.8rem">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum
          </Text>
          <form id="login-form">
            <FormControl id="username" mt="5vh" isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                // value={user.username || ''}
                // onChange={handleChange('username')}
              />
            </FormControl>
            <FormControl id="firstname" mt="3vh" isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                id="firstname"
                type="text"
                placeholder="Enter your firstname"
                // value={user.username || ''}
                // onChange={handleChange('username')}
              />
            </FormControl>
            <FormControl id="lastname" mt="3vh" isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input
                id="lastname"
                type="text"
                placeholder="Enter your lastname"
                // value={user.username || ''}
                // onChange={handleChange('username')}
              />
            </FormControl>
            <FormControl id="phone_number" mt="3vh">
              <FormLabel>Phone Number</FormLabel>
              <InputGroup>
                <InputLeftAddon>
                  <Select
                    borderColor="transparent"
                    _focus={{ borderColor: 'transparent' }}
                    _active={{ borderColor: 'transparent' }}
                  >
                    <option>+254</option>
                  </Select>
                </InputLeftAddon>
                <Input
                  prefix="+254"
                  id="phone_number"
                  type="number"
                  placeholder="Enter your phone number"
                  //   value={user.phone_number || ''}
                  //   onChange={handleChange('phone_number')}
                />
              </InputGroup>
            </FormControl>
            <Button
              mt="3vh"
              mb="2vh"
              type="submit"
              width="100%"
              _focus={{ outline: 'none' }}
              _active={{ outline: 'none' }}
              onClick={() => navigate('/dashboard')}
            >
              Complete Profile
            </Button>
          </form>
        </Stack>
      </Box>
    </SimpleGrid>
  );
};

export default CompleteProfile;
