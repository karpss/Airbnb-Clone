/* eslint-disable */
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Logo from '../Logo/Logo';
import { flexBetweenCenter, dFlex, displayOnDesktop } from "../../themes/CommonStyles";
import ApartmentSearch from '../ApartmentSearch/ApartmentSearch';
import ProfileSettings from '../ProfileSettings/ProfileSettings';
import MobileView from '../MobileView/MobileView';

const Navbar = () => {
  return (
    <Box
            sx={{
                ...dFlex,
                minHeight: 70,
                borderBottom: '1px solid #ddd',
            }}>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        ...flexBetweenCenter,
                        minHeight: 90,
                        px: 4,
                    }}>
                    <Box sx={displayOnDesktop}>
                      <Logo/>  
                    </Box>
                    <Box sx={displayOnDesktop}>
                        <ApartmentSearch/>
                    </Box>
                    <Box sx={displayOnDesktop}>
                        <ProfileSettings/>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                        }}>
                            <MobileView/>
                        
                    </Box>
                </Box>
            </Container>
        </Box>
    );
  
}

export default Navbar