import { Grid, TextField, Typography, Button } from '@mui/material';
import { findNumericNumber } from '../../util/findNumericNumber.js';
import { checkIsAlphabetic } from '../../util/validateString.js';
import React, { useState } from 'react';

const NameNumerCalculator = () => {
    const [numericNumber, setNumericNumber] = useState();
    const [name, setName] = useState('');
    const [isError, setIsError] = useState(false);
    const [isButtondisabled, setIsButtondisabled] = useState(false);
    

    const nameNumericNumberClickAction = () => {
        setNumericNumber('கணிக்கப்படுகிறது....');
        setIsButtondisabled(true);
        if(!name){
            setIsError(true);
            return;
        }
        const calculatedValue = findNumericNumber(name);
        setTimeout(() => {
            setNumericNumber(calculatedValue);
            setIsButtondisabled(false);
        }, 1000);
    };

    const handleNameChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue === '' || checkIsAlphabetic(inputValue)) {
            setName(inputValue);
        }
    };

    return (
        <Grid 
            backgroundColor={'#512da8'} 
            minHeight={'100vh'}
            color={'#fff'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
        >
           
            <Grid mt={20}>
                <Typography variant="h5" marginY={2}>
                    குழந்தையின் பெயரைக் குறிப்பிடுக.
                </Typography>
            </Grid>
                <Grid width={"60%"}>
                    <TextField
                        id="name"
                        variant="outlined"
                        fullWidth
                        value={name}
                        error={isError}
                        helperText={
                            isError && "குழந்தையின் பெயர் பதிவுசெய்யப்படவில்லை."
                        }
                        autoComplete='off'
                        onChange={handleNameChange}
                        sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        border: '1px solid #fff',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#fff',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#fff',
                                    },
                                },
                                '& .MuiOutlinedInput-input': {
                                    color: '#fff',
                                    backgroundColor: '#7c4dff',
                                    fontSize: '1.2rem',
                                    fontWeight: '700'
                                },
                                '& .MuiFormHelperText-root': {
                                    color: '#fff500 !important',
                                    fontSize: '0.9rem !important',
                                    mx: 0,
                                    mt: 1,
                                    textAlign: {xs: 'center', sm: 'left'}
                                }
                        }}
                    />
                </Grid>
                <Grid 
                    mt={2}
                    width='70%'
                    textAlign={'center'}
                >
                    <Button 
                        variant="contained"
                        sx={{
                            backgroundColor: '#7c4dff',
                            color: '#fff',
                            height: '3rem',
                        }}
                        onClick={nameNumericNumberClickAction}
                        disabled={isButtondisabled}
                    >
                        Calculate
                    </Button>
                </Grid>
                <Grid>
                    <Typography variant="h6" mt={5}>
                        {numericNumber !== undefined && `குழந்தையின் பெயரின் எண்: ${numericNumber}`}
                    </Typography>
                </Grid>
        </Grid>
    );
};

export default NameNumerCalculator;