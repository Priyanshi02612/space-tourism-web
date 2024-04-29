import React, { useState } from 'react';
import {
  Box,
  Divider,
  Flex,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import moonImage from '../../assets/destination/image-moon.png';
import marsImage from '../../assets/destination/image-mars.png';
import europaImage from '../../assets/destination/image-europa.png';
import titanImage from '../../assets/destination/image-titan.png';

const planetsData = [
  {
    id: '1',
    title: 'Moon',
    info: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400 km',
    travelTime: '3 days',
    image: moonImage,
  },
  {
    id: '2',
    title: 'Mars',
    info: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    distance: '225 mil. km',
    travelTime: '9 months',
    image: marsImage,
  },
  {
    id: '3',
    title: 'Europa',
    info: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    distance: '628 mil. km',
    travelTime: '3 years',
    image: europaImage,
  },
  {
    id: '4',
    title: 'Titan',
    info: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    distance: '1.6 bil. km',
    travelTime: '7 years',
    image: titanImage,
  },
];

const Destination = () => {
  const [activePlanetImage, setActivePlanetImage] = useState(moonImage);

  const handleTabChange = (planetImage) => {
    setActivePlanetImage(planetImage);
  };

  return (
    <Box
      p={{
        base: '40px 16px 0px',
        md: '15px 40px 0px',
        lg: '48px 68px 0px',
        xl: '48px 142px 0px',
      }}
    >
      <Flex
        gap='12px'
        justifyContent={{ base: 'center', lg: 'left' }}
        fontSize='20px'
        fontFamily='heading'
        ms={{ lg: '96px' }}
        color='color.gray.light'
      >
        01<Text color='white'>PICK YOUR DESTINATION</Text>
      </Flex>

      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        alignItems='center'
        gap={{
          base: '40px',
          md: '54px',
          lg: '64px',
          xl: '208px',
          '2xl': '116px',
        }}
      >
        <Box>
          <Image
            src={activePlanetImage}
            m={{
              base: '24px 48px 0px',
              lg: '74px 0px 0px',
              '2xl': '74px 160px 0px',
            }}
            maxW={{
              base: '254px',
              md: '700px',
              lg: '363px',
              xl: '1060px',
              '2xl': '750px',
            }}
          />
        </Box>

        <Box
          textAlign={{ base: 'center', lg: 'left' }}
          w={{ base: '360px', md: '100%' }}
        >
          <Tabs>
            <TabList
              borderBottomStyle='none'
              gap={{ lg: '24px', '2xl': '68px' }}
              justifyContent='center'
            >
              {planetsData.map((planet, index) => (
                <Tab
                  key={index}
                  pb='20px'
                  _selected={{ color: 'white', borderBottomColor: 'white' }}
                  gap='12px'
                  onClick={() => handleTabChange(planet.image)}
                  color='color.gray.light'
                  fontFamily='body'
                >
                  {planet.title.toUpperCase()}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {planetsData.map((planet) => (
                <TabPanel key={planet.id} mt={{ md: '40px' }}>
                  <Text
                    fontSize={{ base: '64px', md: '92px' }}
                    fontFamily='main'
                  >
                    {planet.title.toUpperCase()}
                  </Text>
                  <Text
                    fontSize={{ base: '12px', md: '18px' }}
                    w={{ lg: '480px', xl: '500px', '2xl': '612px' }}
                    h={{ md: '140px', lg: '108px' }}
                    color='color.gray.light'
                    fontFamily='heading'
                  >
                    {planet.info}
                  </Text>

                  <Divider
                    m='52px 0px 32px'
                    display={{ base: 'none', lg: 'block' }}
                  />

                  <Flex
                    gap={{ base: '28px', md: '80px' }}
                    mt={{ base: '12px', md: '0px' }}
                    justifyContent={{ base: 'center', lg: 'normal' }}
                  >
                    <Box>
                      <Text
                        fontSize={{ base: '12px', md: '14px' }}
                        color='color.gray.light'
                      >
                        AVG. DISTANCE
                      </Text>

                      <Text
                        fontSize={{ base: '24px', md: '32px' }}
                        fontFamily='main'
                      >
                        {planet.distance.toUpperCase()}
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        fontSize={{ base: '12px', md: '14px' }}
                        color='color.gray.light'
                      >
                        EST. TRAVEL TIME
                      </Text>

                      <Text
                        fontSize={{ base: '24px', md: '32px' }}
                        fontFamily='main'
                      >
                        {planet.travelTime.toUpperCase()}
                      </Text>
                    </Box>
                  </Flex>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Box>
  );
};
export default Destination;
