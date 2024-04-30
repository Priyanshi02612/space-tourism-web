import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import style from './index.module.css';
import CrewImage1 from '../../assets/crew/image-douglas-hurley.png';
import CrewImage2 from '../../assets/crew/image-mark-shuttleworth.png';
import CrewImage3 from '../../assets/crew/image-victor-glover.png';
import CrewImage4 from '../../assets/crew/image-anousheh-ansari.png';

const crewImages = [CrewImage1, CrewImage2, CrewImage3, CrewImage4];

const crewInfo = [
  {
    role: 'COMMANDER',
    name: 'DOUGLAS HURLEY',
    image: CrewImage1,
    description:
      'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
  },
  {
    role: 'MISSION SPECIALIST',
    name: 'MARK SHUTTLEWORTH',
    image: CrewImage2,
    description:
      'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
  },
  {
    role: 'PILOT',
    name: 'VICTOR GLOVER',
    image: CrewImage3,
    description:
      'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
  },
  {
    role: 'FLIGHT ENGINEER',
    name: 'ANOUSHEH ANSARI',
    image: CrewImage4,
    description:
      'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
  },
];

const Crew = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlideIndex(index);
  };

  return (
    <Box
      padding={{
        base: '40px 20px 0px',
        lg: '40px 90px 0px',
        '2xl': '40px 192px 0px',
      }}
      overflow='hidden'
      h={{ base: '90vh', md: '634px', lg: '500px', }}
    >
      <Flex
        gap='12px'
        fontSize='20px'
        fontFamily='heading'
        ms={{ base: '40px', lg: '0px' }}
        color='color.gray.light'
      >
        02
        <Text textTransform='uppercase' color='white'>
          meet your crew
        </Text>
      </Flex>

      <Carousel
        className={style.customCSS}
        showIndicators={true}
        infiniteLoop={false}
        showArrows={false}
        showStatus={false}
        onChange={handleSlideChange}
      >
        {crewInfo.map((crew, index) => (
          <Box
            key={index}
            mt={{ base: '60px', md: '20px', lg: '108px' }}
            textAlign={{ base: 'center', lg: 'left' }}
            maxW={{ base: '400px', md: '100%', lg: '500px', '2xl': '800px' }}
            h={{ base: '190px', lg: '500px' }}
          >
            <Text
              fontSize={{ base: '16px', md: '20px', lg: '24px' }}
              fontFamily='main'
              color='gray.400'
            >
              {crew.role}
            </Text>

            <Text
              fontSize={{ base: '24px', md: '32px', lg: '38px' }}
              fontFamily='main'
              color='gray.100'
            >
              {crew.name}
            </Text>

            <Text
              fontSize={{ base: '12px', md: '16px', lg: '18px' }}
              fontFamily='body'
              color='color.gray.light'
            >
              {crew.description}
            </Text>
          </Box>
        ))}
      </Carousel>

      <Box
        display='flex'
        justifyContent='center'
        className={style.imageContainer}
      >
        <Image
          src={crewImages[activeSlideIndex]}
          maxW={{ base: '300px', md: '258px', lg: '360px', xl: '600px' }}
          position='absolute'
          right={{ base: '12%', md: '37%', lg: '6%', xl: '12%' }}
          bottom='0px'
        />
      </Box>
    </Box>
  );
};

export default Crew;
