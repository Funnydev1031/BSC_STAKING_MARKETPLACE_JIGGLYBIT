import React from 'react';
import { Typography, Box, InputBase, Button, Divider, Stack } from '@mui/material';
import { CardContainer, CardItem, ButtonFirst, ButtonSecond, InputLink } from '../../../components';

const SectionHowItWorks = () => {
  const handleBuy = () => {
    console.log('clicked buy')
  };
  return (
    <CardContainer>
      <Typography variant='h6' textAlign='center' mb={3}>
        How It Works:
      </Typography>
      <Typography variant='body2' textAlign='center'>
        Deposit BNB to buy Strip Clubs.
        <br/> <br/>
        Once you Buy your clubs strippers will automatically start producing rewards.
        <br/> <br/>
        Rewards can be re-invested & withdrawn daily.
        <br/> <br/>
        To ensure the max rewards (8%) We recommend the following strategy:
        <br/> <br/>
        Hire more Strippers 6 Days/Week
        <br/> <br/>
        and
        <br/> <br/>
        Make it Rain 1 Day/Week
        <br/> <br/>
        This strategy has been proven to maximise returns for all users in the long term.
        <br/> <br/>
        Please note:
        <br/> <br/>
        You can not unstake BNB ; only withdraw earnings.
      </Typography>
    </CardContainer>
  )
}
export default SectionHowItWorks;