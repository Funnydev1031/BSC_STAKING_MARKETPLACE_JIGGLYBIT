import React, {useState} from 'react';
import { Typography, Box, InputBase, Button, Divider } from '@mui/material';

export const ButtonFirst = ({ children, ...otherProps }) => {
  return (
    <Button
      variant='contained'
      fullWidth
      size='large'
      color='primary'
      sx={{
        height: 56,
        textTransform: 'none',
        borderRadius: '9px'
      }}
      {...otherProps}
    >
      <Typography variant='h6' color='white'>
        {children}
      </Typography>
    </Button>
  )
}

export const ButtonSecond = ({ children, ...otherProps }) => {
  return (
    <Button
      variant='contained'
      fullWidth
      size='large'
      color='secondary'
      sx={{
        height: 56,
        textTransform: 'none',
        borderRadius: '9px'
      }}
      {...otherProps}
    >
      <Typography variant='h6' color='primary'>
        {children}
      </Typography>
    </Button>
  )
}

export const InputBNB = ({bnbAmount, setBnbAmount}) => {
  return (
    <Box
      mb={3}
      backgroundColor='white'
      sx={{
        border: '1px solid #ACBABF',
        borderRadius: '9px',
        position: 'relative',
        marginBottom: '15px',
        minHeight: '56px',
      }}
    >
      <InputBase
        sx={{
          p: '10px 70px 10px 20px',
          width: '100%',
          '& .MuiInputBase-input': {
            textAlign: 'right'
          }
        }}
        placeholder={bnbAmount+''}
        // value={bnbAmount}
        onChange={(e) => setBnbAmount(e.target.value)}
      />
      <Typography
        component='p'
        p={1}
        sx={{
          position: 'absolute',
          right: '14px',
          top: '5px'
        }}
      >
        BNB
      </Typography>
    </Box>
  )
}

export const InputLink = ({referUrl}) => {
  return (
    <Box
      mb={3}
      backgroundColor='white'
      sx={{
        border: '1px solid #ACBABF',
        borderRadius: '9px',
        position: 'relative',
        marginBottom: '15px',
        minHeight: '56px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography variant='body2' sx={{
        paddingX:'1rem'
      }} noWrap
      >
        {console.log('ddddd', referUrl)}
        {
        referUrl}
      </Typography>
    </Box>
  )
}

export const SocialButtonIcon = ({children}) => {
  return (
    <Box>
      {children}
    </Box>
  )
}