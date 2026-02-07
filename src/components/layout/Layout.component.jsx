import { Grid, Box, Typography } from '@mui/material';
import NameList from '../nameList/NameList.component.jsx';
import LetterNavigation from '../letterNavigation/LetterNavigation.component.jsx';
import React from 'react';

const Layout = () => {
  const [selectedLetter, setSelectedLetter] = React.useState('அ');

  return (
    <Grid container sx={{ width: '100vw', height: 'auto', margin: 0 }}>
      {/* Left Advertisement Panel */}
      <Grid 
        item
        size={4}
        sx={{ 
          minHeight: '100vh',
          position: 'sticky',
          top: 0,
          background: '#7c4dff',
          boxShadow: '6px 0 16px 4px rgba(0,0,0,0.25)', 
        }}>
          <LetterNavigation letterSelectAction={(letter) => setSelectedLetter(letter)} />
      </Grid>
      {/* Main Body */}
      <Grid item size={8} sx={{ minHeight: '100vh' }}>
        <Box
          sx={{
            height: '100%',
            background: '#512da8',
            display: 'flex',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: 'bold',
          }}
        >
          <NameList
            currentLetter={selectedLetter}
            gender={"ஆண்"}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Layout;