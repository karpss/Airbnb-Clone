/* eslint-disable */
import { Box, Button, Link, Stack } from '@mui/material';
import React from 'react';
import { flexCenter } from "../../themes/CommonStyles";
import { BsGlobe } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';

const ProfileSettings = () => {
    return (
        <Box sx={flexCenter}>
            <Link
                href="#"
                style={{
                    fontWeight: 'bold',
                }}>
                Become A Host
            </Link>
            <Stack>
                <Button>
                    <BsGlobe size={24} />
                </Button>
                <Button
                    sx={{
                        borderRadius: 10,
                        border: '1px solid #ddd',
                    }}>
                    <Stack>
                        <AiOutlineMenu size={24} />
                        <FaRegUserCircle size={24} />
                    </Stack>
                </Button>
            </Stack>
        </Box>
    );
};

export default ProfileSettings;
