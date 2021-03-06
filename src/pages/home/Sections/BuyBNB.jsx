import React, { useEffect, useState }  from 'react';
import { Typography, Box, InputBase, Button, Divider, Stack } from '@mui/material';
import { CardContainer, CardItem, ButtonFirst, ButtonSecond, InputBNB } from '../../../components';
import { getContract, getSigner } from "../../util/commonFunc";
import {ethers} from 'ethers'

const SectionBuyBNB = ({walletAddress, contract, contractBalance, setContractBalance, walletBalance, yourProfit, yourStrippers}) => {
  const [bnbAmount, setBnbAmount] = useState(0)
  

  const buyStripper = async () => {
    try {
      if (!walletAddress) {
        alert("connect your wallet");
        return;
      }
      const options = { value: ethers.utils.parseEther(bnbAmount) };
      if(contract) {
        await contract.buyStripers(walletAddress, options);
        setTimeout(async() => setContractBalance(parseFloat(ethers.utils.formatUnits(await contract.getBalance())).toFixed(4)), 5000)
      }
    } catch (e) {
      console.log("explation:   ", e);
    }
  };

  const hireStrippers = async () => {
    try {
      // const options = { value: ethers.utils.parseEther(bnbAmount) };
      let tx = await contract.hatchStripers(walletAddress);
      setTimeout(async() => setContractBalance(parseFloat(ethers.utils.formatUnits(await contract.getBalance())).toFixed(4)), 5000)
    } catch (error) {
      console.log(error);
    }
  };

  const makeRain = async () => {
    // const contract = getContract();
    try {
      console.log("makeRain")
      let tx = await contract.sellStripers();
      setTimeout(async() => setContractBalance(parseFloat(ethers.utils.formatUnits(await contract.getBalance())).toFixed(4)), 5000)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CardContainer>
      <CardItem>
        <Typography variant='body1' color='txtTitle'> Contract </Typography>
        <Typography variant='h6' color='txtFirst'> {contractBalance} BNB </Typography>
      </CardItem>
      <CardItem>
        <Typography variant='body1' color='txtTitle'> Wallet </Typography>
        <Typography variant='h6' color='txtFirst'> {walletBalance} BNB </Typography>
      </CardItem>
      <CardItem>
        <Typography variant='body1' color='txtTitle'> Your Strippers </Typography>
        <Typography variant='h6' color='txtFirst'> {yourStrippers} STRIPPERS </Typography>
      </CardItem>
      
      <CardItem>
        <Typography variant='body1' color='txtTitle'> Your Profit </Typography>
        <Typography variant='h6' color='txtFirst'> {yourProfit} BNB </Typography>
      </CardItem>


      <InputBNB bnbAmount={bnbAmount} setBnbAmount={setBnbAmount}/>

      <ButtonFirst
        onClick={buyStripper}
        disabled={walletAddress ? false : true}
        // disabled={walletAddress ? true : false}
      >
        Buy Strip Club
      </ButtonFirst>
      {/* <Typography variant='body2' textAlign='center' mt='6px'>
        Deposit
      </Typography> */}

      <Divider sx={{ mt: 2, mb: 3 }} />

      <Stack
        direction="row"
        alignItems="center"
        spacing={1.5}
        mx="auto"
        maxWidth={430}
        mb={1}
      >
        <Box sx={{width: '100%'}}>
          <ButtonSecond
            disabled={walletAddress ? false : true}
            onClick={hireStrippers}
          >
            Hire Strippers
          </ButtonSecond>
          {/* <Typography variant='body2' textAlign='center' mt={1}>Recompound</Typography> */}
        </Box>
        <Box sx={{width: '100%'}}>
          <ButtonSecond
            disabled={walletAddress ? false : true}
            onClick={makeRain}
          >
            Make it rain
          </ButtonSecond>
          {/* <Typography variant='body2' textAlign='center' mt={1}>claim</Typography> */}
        </Box>
      </Stack>

    </CardContainer>
  )
}
export default SectionBuyBNB;