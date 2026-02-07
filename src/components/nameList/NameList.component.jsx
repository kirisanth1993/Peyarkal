import React from 'react';
import { Grid, Typography } from '@mui/material';
import { NAMELIST } from '../../app.constant.js';
import { findNumericNumber } from '../../util/findNumericNumber.js';

const NameList = ({currentLetter, gender}) => {
  return (
    <Grid width={"100%"}>
      <Grid
        backgroundColor={'#512da8'} 
        textAlign={'center'} 
        position={"sticky"} 
        top="0"
      >
        <Typography 
          sx={{ 
            width: '100%',
            mb: 1,
            align: "center",
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          பெயர்கள்
        </Typography>
      </Grid>
      <Grid
        width={"100%"}
        container
        spacing={2}
        px={6}
        pt={1}
        pb={2}
      > 
        {NAMELIST[gender][currentLetter]
        ?.slice() // create a copy to avoid mutating original
        .sort((a, b) => a.name.localeCompare(b.name, 'ta'))
        ?.map((nameObj, index) => (
          <Grid
            item
            width={"100%"}
            flexDirection={'column'}
            sx={{ 
              padding: '0.5rem', 
              border: '1px solid #eee',
              borderRadius: '4px',
              marginBottom: '0.5rem',
              backgroundColor: '#673ab7',
              color: '#fff',
            }} 
            key={index}
          >
            <Typography variant="h6">
              {nameObj.name}
            </Typography>
            <Typography variant="body2">
              அர்த்தம்: {nameObj.meaning}
            </Typography>
            <Grid sx={{ display: 'flex', justifyContent: 'space-between'}}>
              <Typography variant="body2">
                ஆங்கிலத்தில்: {nameObj.nameInEnglish}
              </Typography>
              <Typography variant="body2">
                எண்: {findNumericNumber(nameObj.nameInEnglish)}
              </Typography>
            </Grid>

          </Grid>
        ))}
        {/* {
          console.log("length", NAMELIST[gender][currentLetter], currentLetter, !NAMELIST[gender][currentLetter])
        } */}
        {
          (!NAMELIST[gender][currentLetter] || 
          NAMELIST[gender][currentLetter]?.length === 0) && (
            <Typography 
              sx={{ 
                width: '100%',
                mb: 1,
                align: "center",
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#fff',
                textAlign: 'center',
                marginTop: '2rem',
              }}
            >
              இந்த எழுத்துக்கான பெயர்கள் இல்லை.
            </Typography>
            // <Grid
            //   sx={{
            //     display: 'flex',
            //     justifyContent: 'center',
            //     alignItems: 'center',
            //     flexDirection: 'column',
            //     marginTop: '2rem',
            //     width: '100%',
            //   }}
            // >

            // <img
            //   src="noData.jpg"
            //   height={"500px"}
            //   width={"333px"}
            // />
            // </Grid>

          )
        }
      </Grid>
    </Grid>
  );
};

export default NameList;