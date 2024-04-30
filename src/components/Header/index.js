import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Image,
  Tab,
  TabList,
  Tabs,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/shared/logo.svg';
import { GrMenu } from 'react-icons/gr';

const Header = ({ tabs, tabIndex }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      ps={{ base: '20px', md: '44px' }}
      color='white'
      alignItems='center'
      justifyContent='space-between'
      position='relative'
    >
      <Image
        src={logo}
        mb={{ '2xl': '24px' }}
        w={{ base: 'auto', md: '42px', lg: '50px', xl: '104px' }}
        h={{ base: 'auto', md: '42px', lg: '50px', xl: '104px' }}
      />

      <Divider
        position='absolute'
        top='40%'
        right={{ lg: '71%', xl: '50%', '2xl': '45%' }}
        zIndex='1'
        w={{ lg: '16%', xl: '38%', '2xl': '44%' }}
        opacity='0.3'
      />

      <Tabs
        index={tabIndex}
        display={{ base: 'none', md: 'block' }}
        p={{ md: '40px 32px', lg: '40px 80px' }}
        backgroundColor='transparent'
        backdropFilter='blur(24px)'
      >
        <TabList borderBottomStyle='none' gap={{ lg: '24px', '2xl': '68px' }}>
          {tabs.map((tab, index) => (
            <NavLink to={tab.path} key={index}>
              <Tab
                pb='20px'
                _selected={{ color: 'white', borderBottomColor: 'white' }}
                gap='12px'
              >
                <Text
                  fontFamily='heading'
                  fontWeight='700'
                  display={{ md: 'none', lg: 'block' }}
                >
                  0{tab.id}
                </Text>

                <Text fontFamily='heading' fontWeight='200'>
                  {tab.name}
                </Text>
              </Tab>
            </NavLink>
          ))}
        </TabList>
      </Tabs>

      <Button
        background='transparent'
        color='color.gray'
        onClick={onOpen}
        display={{ base: 'block', md: 'none' }}
      >
        <Icon as={GrMenu} w='34px' h='34px' />
      </Button>

      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent
          backgroundColor='transparent'
          backdropFilter='blur(10px)'
          width='230px !important'
        >
          <DrawerCloseButton color='white' />

          <DrawerBody mt='54px'>
            {tabs.map((tab, index) => (
              <NavLink to={tab.path} key={index}>
                <Text
                  justifyContent='center'
                  fontSize='18px'
                  color='white'
                  onClick={() => {
                    onClose();
                  }}
                >
                  {tab.name}
                </Text>
              </NavLink>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
export default Header;
