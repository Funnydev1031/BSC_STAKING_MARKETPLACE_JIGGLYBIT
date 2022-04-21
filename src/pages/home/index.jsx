import React, {useState, useEffect} from 'react';
import { ethers } from 'ethers';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/images/logo.png';
import { Stack, Typography, Paper, Box, Button } from '@mui/material';

import SectionBuyBNB from './Sections/BuyBNB';
import SectionInfoSection from './Sections/InfoSection';
import SectionRefer from './Sections/Refer';
import SectionHowItWorks from './Sections/HowItWorks';
import { connectWallet, getContract, getWalletBalance } from '../util/commonFunc';

const HomePage = () => {
  const [walletAddress, setWalletAddress] = useState('')
  const [contractBalance, setContractBalance] = useState(0)
  const [walletBalance, setWalletBalance] = useState(0)
  const [yourProfit, setYourProfit] = useState(0)
  const [yourStrippers, setYourStrippers] = useState(0)
  const [contract, setContract] = useState(undefined)

  useEffect(async () => {
      if(contract)
      {
        setContractBalance(parseFloat(ethers.utils.formatUnits(await contract.getBalance())).toFixed(4))
        setWalletBalance(await getWalletBalance(walletAddress))
        setYourProfit(parseFloat(ethers.utils.formatUnits(await contract.striperRewards(walletAddress))).toFixed(4))
        const res1 = ethers.utils.formatUnits(await contract.striperRewards(walletAddress))
        const res2 = ethers.utils.formatUnits(await contract.getMyMiners(walletAddress))
        setYourStrippers(parseFloat(await contract.getMyStripers(walletAddress)))
      }
  }, [contract, contractBalance])
  
  const connectHandler = async () => {
    const connectResponse = await connectWallet()
    setWalletAddress(connectResponse.address)
    if(connectResponse.address){
      const cont = getContract()
      setContract(cont)
    } 
  }

  const disConnectHandler = () => {
    setWalletAddress('')
    setContract(undefined)
  }

  const connectWalletButton = () => {
    return (
      <Button variant='contained'
        size='large'
        sx={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          width: 150,
          height: 64,
          backgroundColor: '#135BE8',
          color: 'white',
          fontSize: '18px',
          boxShadow: 'rgb(0 0 0 / 59%) 6px 6px 20px 6px',
          '&:hover': {
            opacity: 0.5,
            backgroundColor: '#135BE8'
          }
        }}
        onClick={walletAddress ? disConnectHandler : connectHandler}
      >{walletAddress? 'Disconnect' : 'Connect'}
        </Button>
    )
  }

  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={3}
      mx="auto"
      maxWidth={430}
      pb={3}
    >
      {connectWalletButton()}
      <Link to="/">
        <img src={LogoImg} alt="Jiggly Bits" />
      </Link>
      <Typography
        variant='h4'
        color='txtFirst'
        textAlign='center'
        textTransform='uppercase'
        >
        Jiggly Bits
      </Typography>
      <Typography
        variant='body1'
        color='txtTitle'
        textAlign='center'
        paddingX='30px'
      >
        The BNB Reward Pool with the sexiest daily return and lowest dev fee
      </Typography>

      <SectionBuyBNB walletAddress={walletAddress} 
      contract={contract} 
      contractBalance={contractBalance} 
      setContractBalance={setContractBalance} 
      walletBalance={walletBalance}
      yourProfit={yourProfit}
      yourStrippers={yourStrippers}/>
      <SectionInfoSection />
      <SectionRefer />
      <SectionHowItWorks />

    </Stack>
  )
}

export default HomePage;