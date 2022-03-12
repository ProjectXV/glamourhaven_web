import { Box, Button, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import image from '../assets/Landingpage.jpg';
import React from 'react';
import Header from '../components/PageSections/Header';
import ServicesCard from '../components/Cards/ServicesCard';
import { ServicesList } from '../data/ServicesData';
import Footer from '../components/PageSections/Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box overflowX="hidden">
      <Box backgroundImage={image} objectFit="cover" h="100vh" w="100%">
        <Header />

        <Stack px="5vw" mt="5vh">
          <Stack spacing="30px" mb="5vh">
            <Text
              textAlign="left"
              fontSize={['1em', '2em', '2em', '2em', '3em']}
              w={['100vw', '100vw', '100vw', '100vw', '45vw']}
              lineHeight={['5px', '10px', '10px', '20px', '20px']}
            >
              Lorem Ipsum dolor sit amet,
            </Text>
            <Text
              textAlign="left"
              fontSize={['1em', '2em', '2em', '3em']}
              lineHeight={['5px', '10px', '10px', '20px']}
            >
              consectetur adipiscing elit.
            </Text>
            <Text
              textAlign="left"
              fontSize={['1em', '2em', '2em', '3em']}
              lineHeight={['5px', '10px', '10px', '20px']}
            >
              Scelerisque viverraa
            </Text>
          </Stack>

          <Button
            w="250px"
            bg="brand.300"
            borderRadius="3px"
            color="white"
            onClick={() => navigate('/account/login')}
          >
            Book An Appointment
          </Button>
        </Stack>
      </Box>
      <Box bg="brand.200" h="100%">
        <Text pt="5vh" pb="2vh">
          OUR SERVICES
        </Text>
        <Text fontWeight="bold" fontSize="2em">
          Our Coveted{' '}
          <Box as={'span'} color="brand.300">
            Services
          </Box>
        </Text>
        <Box px="5vw">
          <SimpleGrid mt="6vh" columns={[1, 2, 3, 4]} spacing="auto">
            {ServicesList.map(service => {
              return <ServicesCard key={service.id} service={service} />;
            })}
          </SimpleGrid>
        </Box>
      </Box>
      <Box bg="white" h="100%">
        <Text pt="5vh" pb="2vh">
          OUR SERVICES
        </Text>
        <Text fontWeight="bold" fontSize="2em">
          Our Coveted{' '}
          <Box as={'span'} color="brand.300">
            Services
          </Box>
        </Text>
        <Box px="5vw">
          <SimpleGrid mt="6vh" columns={[1, 2, 3, 4]} spacing="auto">
            {ServicesList.map(service => {
              return <ServicesCard key={service.id} service={service} />;
            })}
          </SimpleGrid>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
