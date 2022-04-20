import React from 'react';
import { Typography, Box, InputBase, Button, Divider, Stack } from '@mui/material';
import { CardContainer, CardItem, ButtonFirst, ButtonSecond, InputLink } from '../../../components';

const SectionRefer = () => {
  const handleBuy = () => {
    console.log('clicked buy')
  };
  return (
    <CardContainer>
      <Typography variant='h6' textAlign='center' mb={1}>
        Referral Link
      </Typography>
      <InputLink>asdfasdf</InputLink>
      <Typography variant='body2' textAlign='center'>
        Earn 12% of the BNB used to buy strip clubs from anyone who uses your referral link
      </Typography>
    </CardContainer>
  )
}
export default SectionRefer;