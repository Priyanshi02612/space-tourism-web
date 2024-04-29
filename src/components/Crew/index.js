import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import ExampleCarouselImage from '../../assets/shared/black-image.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CrewImage1 from '../../assets/crew/image-anousheh-ansari.png';

const Crew = () => {
  return (
    <Box>
      <Text>02 Crew</Text>
      <Flex>
        <Box p='12px'>
          <Carousel
            showIndicators={true}
            infiniteLoop={false}
            showArrows={false}
            showStatus={false}
            
          >
            <Box background='black' p='24px'>
              Flight engineer
              <Text>Description</Text>
            </Box>
            <Box background='black' p='24px'>
              Crew 2 <Text>Description</Text>
            </Box>
            <Box background='black' p='24px'>
              Crew 3 <Text>Description</Text>
            </Box>
            <Box background='black' p='24px'>
              Crew 4 <Text>Description</Text>
            </Box>
          </Carousel>
        </Box>
        <Box>
          <Image src={CrewImage1} w='100%' />
        </Box>
      </Flex>
    </Box>
  );
};

export default Crew;
