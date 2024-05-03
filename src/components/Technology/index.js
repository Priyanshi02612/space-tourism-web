import { Box, Flex, Image, Tab, TabList, Tabs, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import VehiclePotrait from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import SpaceportPotrait from '../../assets/technology/image-spaceport-portrait.jpg';
import SpaceCapsulePotrait from '../../assets/technology/image-space-capsule-portrait.jpg';
import VehicleLandscape from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import SpaceportLandscape from '../../assets/technology/image-spaceport-landscape.jpg';
import SpaceCapsuleLandscape from '../../assets/technology/image-space-capsule-landscape.jpg';

const technologyInfo = [
  {
    id: 1,
    title: 'Launch vehicle',
    description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry 
                  a payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
                  it's quite an awe-inspiring sight on the launch pad!`,
    images: {
      potrait: VehiclePotrait,
      landScape: VehicleLandscape,
    },
  },

  {
    id: 2,
    title: 'Spaceport',
    description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
                  by analogy to the seaport for ships or airport for aircraft. Based in the 
                  famous Cape Canaveral, our spaceport is ideally situated to take advantage 
                  of the Earth’s rotation for launch.`,
    images: {
      potrait: SpaceportPotrait,
      landScape: SpaceportLandscape,
    },
  },
  {
    id: 3,
    title: 'Space capsule',
    description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                  capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                  you'll spend your time during the flight. It includes a space gym, cinema, 
                  and plenty of other activities to keep you entertained.`,
    images: {
      potrait: SpaceCapsulePotrait,
      landScape: SpaceCapsuleLandscape,
    },
  },
];

const Technology = () => {
  const [activeTechnology, setActiveTechnology] = useState(technologyInfo[0]);

  const isSmallScreen = window.innerWidth <= 768;

  const [activeTechnologyImage, setActiveTechnologyImage] = useState(
    isSmallScreen
      ? technologyInfo[0].images.landScape
      : technologyInfo[0].images.potrait
  );

  const handleTabChange = (technology) => {
    setActiveTechnology(technology);

    if (!isSmallScreen) {
      setActiveTechnologyImage(technology.images.potrait);
    } else {
      setActiveTechnologyImage(technology.images.landScape);
    }
  };

  return (
    <Box
      padding={{
        base: '40px 0px 0px',
        lg: '40px 0px 0px 90px',
        '2xl': '40px 0px 0px 192px',
      }}
      h={{ base: '90vh', md: '770px', lg: '500px' }}
    >
      <Flex
        alignItems='center'
        fontSize='24px'
        justifyContent={{ base: 'center', lg: 'left' }}
        gap='12px'
      >
        <Text fontFamily='heading' fontWeight='700' color='gray.500'>
          03
        </Text>

        <Text textTransform='uppercase' color='white'>
          space launch 101
        </Text>
      </Flex>

      <Flex
        alignItems='center'
        gap='24px'
        justifyContent='space-between'
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <Flex
          justifyContent='space-between'
          alignItems='center'
          flexDirection={{ base: 'column', lg: 'row' }}
          gap={{ base: '20px', lg: '40px' }}
          order={{ base: '2', lg: '1' }}
        >
          <Box>
            <Tabs>
              <TabList
                gap={{ base: '20px', lg: '0px' }}
                borderBottomStyle='none'
                justifyContent='center'
                flexDirection={{ base: 'row', lg: 'column' }}
              >
                {technologyInfo.map((technology, index) => (
                  <Tab
                    key={index}
                    _selected={{
                      borderBottomStyle: 'none',
                      backgroundColor: 'white',
                      color: 'black',
                    }}
                    backgroundColor='transparent'
                    color='color.gray.light'
                    borderRadius='50%'
                    border='1px solid'
                    borderColor='gray.500'
                    my='20px'
                    p={{ base: '12px 16px', md: '4px 16px', xl: '18px 28px' }}
                    fontSize={{ base: '12px', md: '24px' }}
                    fontFamily='main'
                    onClick={() => handleTabChange(technology)}
                  >
                    {technology.id}
                  </Tab>
                ))}
              </TabList>
            </Tabs>
          </Box>

          <Box
            w={{ base: '100%', lg: '424px', xl: '800px', '2xl': '900px' }}
            order={{ base: '2', lg: '1' }}
            p={{ base: '0px 20px', lg: '0px' }}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <Text
              textTransform='uppercase'
              fontSize={{ base: '20px', lg: '14px', '2xl': '20px' }}
              color='color.gray.light'
            >
              the terminology...
            </Text>

            <Box mt={{ base: '28px', lg: '0px' }} key={activeTechnology.id}>
              <Text
                textTransform='uppercase'
                fontSize={{
                  base: '18px',
                  md: '32px',
                  lg: '42px',
                  '2xl': '72px',
                }}
                fontFamily='main'
              >
                {activeTechnology.title}
              </Text>

              <Text
                mt={{ base: '8px', lg: '0px' }}
                fontSize={{ base: '16px', xl: '20px' }}
                fontWeight='body'
                color='color.gray.light'
              >
                {activeTechnology.description}
              </Text>
            </Box>
          </Box>
        </Flex>

        <Box order={{ base: '1', lg: '3' }} mt={{ base: '20px', lg: '0px' }}>
          <Image src={activeTechnologyImage} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Technology;
