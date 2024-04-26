import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Flex
      flexDirection={{ base: 'column', lg: 'row' }}
      alignItems='center'
      justifyContent={{ base: 'normal', lg: 'space-between' }}
      gap={{ base: '50px', md: '100px', lg: '0px' }}
      m={{
        base: '64px 52px 0px',
        md: '15px 40px 0px',
        lg: '48px 104px 0px',
        xl: '48px 294px 0px',
      }}
    >
      <Box maxW='500px'>
        <Text
          fontSize={{ base: '20px', md: '32px' }}
          fontFamily='heading'
          textAlign={{ base: 'center', lg: 'left' }}
        >
          So, you want to travel to
        </Text>
        <Text
          fontSize={{ base: '64px', md: '144px' }}
          fontFamily='heading'
          fontWeight='100'
          textAlign={{ base: 'center', lg: 'left' }}
        >
          SPACE
        </Text>
        <Text
          fontSize={{ base: '14px', md: '18px' }}
          fontFamily='heading'
          textAlign={{ base: 'center', lg: 'left' }}
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Text>
      </Box>
      <Box mt={{ lg: '50px' }}>
        <Flex
          alignItems='center'
          justifyContent='center'
          fontSize='42px'
          fontFamily='heading'
          w={{ base: '234px', md: '250px' }}
          h={{ base: '234px', md: '250px' }}
          backgroundColor='white'
          borderRadius='50%'
          color='black'
          textAlign='center'
        >
          EXPLORE
        </Flex>
      </Box>
    </Flex>
  );
};

export default Home;
