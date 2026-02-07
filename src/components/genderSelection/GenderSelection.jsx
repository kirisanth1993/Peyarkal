import { Grid, TextField, Typography, Button, ButtonBase } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GenderSelection = () => {
    const [selectedGender, setSelectedGender] = useState(null);
    const navigate = useNavigate();

    const handleGenderSelect = (gender) => {
        setSelectedGender(gender);
    };

    const continueAction = () => {
        // Continue with the selected gender
        navigate('/', { state: { gender: selectedGender } });
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
            <Grid mt={10}>
                <Typography variant="h5" marginY={2}>
                    குழந்தையின் பாலினத்தை தெரிவு செய்க.
                </Typography>
            </Grid>
            <Grid container spacing={4} justifyContent="center" mt={2} mb={4}>
                <Grid item>
                    <ButtonBase
                        onClick={() => handleGenderSelect('ஆண்')}
                        sx={{
                            border: selectedGender === 'ஆண்' ? '3px solid #fff500' : '3px solid transparent',
                            borderRadius: 4,
                            overflow: 'hidden',
                            width: 180,
                            height: 180,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            background: '#7c4dff',
                        }}
                    >
                        <img
                            src="/assets/images/male.png"
                            alt="ஆண்"
                            style={{ width: 120, height: 120, marginBottom: 8 }}
                        />
                        <Typography variant="h6" color="#fff">ஆண்</Typography>
                    </ButtonBase>
                </Grid>
                <Grid item>
                    <ButtonBase
                        onClick={() => handleGenderSelect('பெண்')}
                        sx={{
                            border: selectedGender === 'பெண்' ? '3px solid #fff500' : '3px solid transparent',
                            borderRadius: 4,
                            overflow: 'hidden',
                            width: 180,
                            height: 180,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            background: '#7c4dff',
                        }}
                    >
                        <img
                            src="/assets/images/female.png"
                            alt="பெண்"
                            style={{ width: 120, height: 120, marginBottom: 8 }}
                        />
                        <Typography variant="h6" color="#fff">பெண்</Typography>
                    </ButtonBase>
                </Grid>
            </Grid>
            <Grid 
                mt={2}
                width='25%'
                textAlign={'center'}
            >
                <Button 
                    variant="contained"
                    fullWidth
                    disabled={!selectedGender}
                    sx={{
                        backgroundColor: '#7c4dff',
                        color: '#fff',
                        height: '3rem',
                        fontSize: '1.2rem',
                    }}
                    onClick={continueAction}
                >
                    தொடர்க
                </Button>
            </Grid>
        </Grid>
    );
};

export default GenderSelection;