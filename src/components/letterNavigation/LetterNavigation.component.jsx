import { LETTERGROUP, CONSONANTS, VOWELS } from '../../app.constant';
import React, {useState} from 'react';
import { Grid, Button, Typography } from '@mui/material';

const LetterNavigation = ({letterSelectAction}) => {

    const [currentLetter, setCurrentLetter] = React.useState('');
    const [selectedLetterForStyle, setSelectedLetterForStyle] = React.useState('');

    return (
        <Grid
            sx={{
                position: 'sticky',
                top: 0,
                px: 1,
                pb: 2
            }}
        >
            <Grid
                sx={{
                    height: '100%',
                    background: '#7c4dff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'top',
                    color: '#fff',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    paddingX: 2,
                }}
            >
                <Typography 
                    sx={{ 
                    width: '100%',
                    mb: 1,
                    align: "center",
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#fff',
                    textAlign: 'center',
                    position: 'sticky',
                    top: 0,
                    background: '#7c4dff',
                    }}
                >
                    முதல் எழுத்துக்கள்
                </Typography>
            </Grid>
            <Grid container spacing={1} justifyContent={"center"}>
                {VOWELS.map((letter, letterIndex) => {
                    return(
                        <Button 
                            variant="outlined" 
                            key={letterIndex}
                            sx={{ 
                                fontSize: '1rem',
                                margin: '2px',
                                color: '#ddff09',
                                borderColor: '#fff', 
                                backgroundColor: selectedLetterForStyle === letter ? '#512da8' : 'transparent'
                            }}
                            onClick={() => {
                                setSelectedLetterForStyle(letter);
                                letterSelectAction(letter);
                            }}
                            
                        >
                            {letter}
                        </Button>
                    );
                })}
            </Grid>

            <Grid mt={4} container spacing={1} justifyContent={"center"}>
                {CONSONANTS.map((letter, letterIndex) => {
                    return(
                        <Button 
                            variant="outlined" 
                            key={letterIndex}
                            sx={{ 
                                fontSize: '1.2rem',
                                margin: '2px',
                                color: '#ddff09',
                                borderColor: '#fff',
                                backgroundColor: selectedLetterForStyle === letter ? '#512da8' : 'transparent'
                            }}
                            onClick={() => {
                                setCurrentLetter('');
                                letterSelectAction(letter);
                                setSelectedLetterForStyle(letter);
                                setTimeout(() => {
                                    setCurrentLetter(letter);
                                }, 200);
                            }}
                        >
                            {letter}
                        </Button>
                    );
                })}
            </Grid>

            <Grid mt={4}>
                {LETTERGROUP[currentLetter] && (
                    <Grid container spacing={1} justifyContent={"center"}>
                        {LETTERGROUP[currentLetter].map((singleLetterGroup, singleLetterGroupIndex) => {
                            return (
                                <Button 
                                    variant="outlined" 
                                    key={singleLetterGroupIndex}
                                    sx={{ 
                                        fontSize: '1.2rem',
                                        margin: '2px',
                                        color: '#ddff09',
                                        borderColor: '#fff', 
                                        backgroundColor: selectedLetterForStyle === singleLetterGroup ? '#512da8' : 'transparent'
                                    }}
                                    onClick={() => {
                                        letterSelectAction(singleLetterGroup)
                                        setSelectedLetterForStyle(singleLetterGroup);
                                    }}
                                >
                                    {singleLetterGroup}
                                </Button>
                            );
                        })}
                    </Grid>
                )}
            </Grid>
        </Grid>
    );
};

export default LetterNavigation;
