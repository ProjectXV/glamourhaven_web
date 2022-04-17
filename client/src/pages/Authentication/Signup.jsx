import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  Checkbox,
  CheckboxGroup,
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
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import signupImage from '../../assets/SignUpPicture.svg';
import illustration from '../../assets/Mobile login-pana.svg';
import AuthLeftContainer from '../../components/PageSections/AuthLeftContainer';

const SignUp = () => {
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
      <Box overflowY="scroll">
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
        <Center width="100%">
          <Stack width="80%">
            <Text align="left" fontSize="2rem">
              Join Us!
            </Text>
            <Text align="left" color="gray.300" fontSize="0.8rem">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum
            </Text>
            <form id="login-form">
              <FormControl id="username" mt="3vh">
                <FormLabel>Username</FormLabel>
                <Input
                  id="username"
                  type="username"
                  placeholder="Enter your username"
                  // value={user.email || ''}
                  // onChange={handleChange('email')}
                />
              </FormControl>
              <FormControl id="email" mt="3vh">
                <FormLabel>Email Address</FormLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  // value={user.email || ''}
                  // onChange={handleChange('email')}
                />
              </FormControl>

              <FormControl id="password" mt="3vh">
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    id="password"
                    type={show ? 'text' : 'password'}
                    placeholder="Enter your password"
                    //   value={user.password || ''}
                    //   onChange={handleChange('password')}
                  />
                  <InputRightElement>
                    {show ? (
                      <Icon as={FiEye} onClick={handleShowPassword} />
                    ) : (
                      <Icon as={FiEyeOff} onClick={handleShowPassword} />
                    )}
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="confirmpassword" mt="3vh">
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    id="confirmpassword"
                    type={show ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    //   value={user.confirmpassword || ''}
                    //   onChange={handleChange('confirmpassword')}
                    onKeyDown={e => handleEnterKey(e)}
                  />
                  <InputRightElement>
                    {show ? (
                      <Icon as={FiEye} onClick={handleShowPassword} />
                    ) : (
                      <Icon as={FiEyeOff} onClick={handleShowPassword} />
                    )}
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <CheckboxGroup>
                <Checkbox
                  mt="3"
                  isChecked={checkedItems[0]}
                  onChange={e => {
                    setCheckedItems([e.target.checked, checkedItems[1]]);
                  }}
                  textAlign="left"
                >
                  Subscribe to our newsletter to get notified of new products
                  and discounts
                </Checkbox>
                <Checkbox
                  mt="3"
                  textAlign="left"
                  isChecked={checkedItems[1]}
                  onChange={e =>
                    setCheckedItems([checkedItems[0], e.target.checked])
                  }
                >
                  By creating an account, you agree to our Terms and Conditions
                </Checkbox>
              </CheckboxGroup>
              {/* {errors && (
              <Text mt="1vh" align="left" color="red">
                {errors.password ||
                  errors.username ||
                  errors.phone_number ||
                  errors.confirmpassword ||
                  errors.email}
              </Text>
            )}
            {errorMessage && (
              <Text mt="1vh" align="left" color="red">
                {errorMessage}
              </Text>
            )} */}
              <Button
                mt="3vh"
                mb="2vh"
                type="submit"
                width="100%"
                //   isDisabled={
                //     !user.password ||
                //     !user.username ||
                //     !user.phone_number ||
                //     !user.confirmpassword ||
                //     !user.email
                //   }
                //   bg={
                //     !user.password ||
                //     !user.username ||
                //     !user.phone_number ||
                //     !user.confirmpassword ||
                //     !user.email
                //       ? 'brand.200'
                //       : 'brand.300'
                //   }
                //   color={
                //     !user.password ||
                //     !user.username ||
                //     !user.phone_number ||
                //     !user.confirmpassword ||
                //     !user.email
                //       ? 'brand.300'
                //       : 'brand.200'
                //   }
                _focus={{ outline: 'none' }}
                _active={{ outline: 'none' }}
                //   isLoading={loading}
                onClick={() => navigate('/account/complete-profile')}
              >
                Create an Account
              </Button>
              <HStack>
                <Divider />
                <Text>Or</Text>
                <Divider />
              </HStack>
              <Button
                leftIcon={<FcGoogle />}
                mt="3vh"
                mb="15vh"
                width="100%"
                _focus={{ outline: 'none' }}
                _active={{ outline: 'none' }}
                variant="outline"
              >
                Sign in with Google
              </Button>
            </form>
          </Stack>
        </Center>
      </Box>
    </SimpleGrid>
  );
};

export default SignUp;
