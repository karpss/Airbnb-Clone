/* eslint-disable */
import React from 'react';
import { IconButton, InputBase, Paper } from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';

const MobileView = () => {
    return (
        <Paper
            component="form"
            sx={{
                display: 'flex',
                p: '2px 4px',
                alignItems: 'center',
                width: 400,
                border: '1px solid #ccc',
                borderRadius: 20,
            }}>
            <IconButton
                sx={{
                    p: '10px',
                }}>
                <FaSearch />
            </IconButton>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Where to?" />
            <IconButton
                type="submit"
                sx={{
                    p: '10px',
                }}>
                <VscSettings />
            </IconButton>
        </Paper>
    );
};

export default MobileView;
