import React, { useEffect, useState } from 'react';
import Header from '../Header';
import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import backgroundImage0 from '../../assets/shared/black-image.jpg';
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
  { id: '0', name: 'HOME', path: '/' },
  { id: '1', name: 'DESTINATION', path: '/destination' },
  { id: '2', name: 'CREW', path: '/crew' },
  { id: '3', name: 'TECHNOLOGY', path: '/technology' },
];

const backgrounds = {
  HOME: { desktop: homeDesktop, tablet: homeTablet, mobile: homeMobile },
  DESTINATION: {
    desktop: destinationDesktop,
    tablet: destinationTablet,
    mobile: destinationMobile,
  },
  CREW: { desktop: crewDesktop, tablet: crewTablet, mobile: crewMobile },
  TECHNOLOGY: {
    desktop: techDesktop,
    tablet: techTablet,
    mobile: techMobile,
  },
};

const AppLayout = () => {
  const [activeTab, setActiveTab] = useState('HOME');
  const [backgroundImage, setBackgroundImage] = useState(backgroundImage0);

  const location = useLocation();

  let defaultTabIndex = 4;

  const [tabIndex, setTabIndex] = useState(defaultTabIndex);

  if (location.pathname.includes('destination')) {
    defaultTabIndex = 1;
  } else if (location.pathname === 'crew') {
    defaultTabIndex = 2;
  } else if (location.pathname === 'technology') {
    defaultTabIndex = 3;
  } else if (location.pathname === '/') {
    defaultTabIndex = 0;
  }

  useEffect(() => {
    if (location.pathname.includes('destination')) {
      setBackgroundImage(backgrounds.DESTINATION);
      setTabIndex(1);
      return;
    }

    if (location.pathname.includes('crew')) {
      setBackgroundImage(backgrounds.CREW);
      setTabIndex(2);
      return;
    }

    if (location.pathname.includes('technology')) {
      setBackgroundImage(backgrounds.TECHNOLOGY);
      setTabIndex(3);
      return;
    }

    if (location.pathname === '/') {
      setBackgroundImage(backgrounds.HOME);
      setTabIndex(0);
      return;
    }

    setBackgroundImage(backgroundImage0);
    setTabIndex(4);
    return;
  }, [location.pathname]);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Box
      backgroundColor='black'
      backgroundImage={{
        base: `url(${backgroundImage.tablet})`,
        lg: `url(${backgroundImage.desktop})`,
      }}
      backgroundSize='cover'
      h={{
        base: '100vh',
        md: 'auto',
        lg: `${window.innerHeight}px`,
      }}
      color='white'
      pt={{ base: '20px', md: '0px', lg: '54px' }}
    >
      <Header
        tabs={tabs}
        tabIndex={tabIndex}
        handleTabChange={handleTabChange}
      />
      <Outlet />
    </Box>
  );
};

export default AppLayout;
