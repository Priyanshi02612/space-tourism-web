import React, { useState } from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import homeDesktop from '../../assets/home/background-home-desktop.jpg';
import homeTablet from '../../assets/home/background-home-tablet.jpg';
import homeMobile from '../../assets/home/background-home-mobile.jpg';
import crewDesktop from '../../assets/crew/background-crew-desktop.jpg';
import crewTablet from '../../assets/crew/background-crew-tablet.jpg';
import crewMobile from '../../assets/crew/background-crew-mobile.jpg';
import destinationDesktop from '../../assets/destination/background-destination-desktop.jpg';
import destinationTablet from '../../assets/destination/background-destination-tablet.jpg';
import destinationMobile from '../../assets/destination/background-destination-mobile.jpg';
import techDesktop from '../../assets/technology/background-technology-desktop.jpg';
import techTablet from '../../assets/technology/background-technology-tablet.jpg';
import techMobile from '../../assets/technology/background-technology-mobile.jpg';

const tabs = [
  { id: '00', name: 'HOME', path: '/' },
  { id: '01', name: 'CREW', path: '/crew' },
  { id: '02', name: 'DESTINATION', path: '/destination' },
  { id: '03', name: 'TECHNOLOGY', path: '/technology' },
];

const backgrounds = {
  HOME: { desktop: homeDesktop, tablet: homeTablet, mobile: homeMobile },

  CREW: { desktop: crewDesktop, tablet: crewTablet, mobile: crewMobile },

  DESTINATION: {
    desktop: destinationDesktop,
    tablet: destinationTablet,
    mobile: destinationMobile,
  },
  TECHNOLOGY: {
    desktop: techDesktop,
    tablet: techTablet,
    mobile: techMobile,
  },
};

const AppLayout = () => {
  const [activeTab, setActiveTab] = useState('HOME');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Box
      backgroundImage={{
        base: `url(${backgrounds[activeTab].tablet})`,
        lg: `url(${backgrounds[activeTab].desktop})`,
      }}
      backgroundSize='cover'
      h={{
        base: '100vh',
        md: `${window.innerHeight}px`,
        lg: `${window.innerHeight}px`,
      }}
      color='white'
      pt={{ base: '20px', md: '0px', lg: '54px' }}
    >
      <Header tabs={tabs} handleTabChange={handleTabChange} />
      <Outlet />
    </Box>
  );
};

export default AppLayout;
