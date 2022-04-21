import React, {useState, useEffect} from 'react';
import { ethers } from 'ethers';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/images/logo.png';
import { Stack, Typography, Paper, Box, Button } from '@mui/material';

import SectionContact from "./Sections/Contact";
import SectionBuyBNB from './Sections/BuyBNB';
import SectionDaily from './Sections/Daily';
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
  const [referUrl, setReferUrl] = useState("");

  useEffect(async () => {
      if(contract)
      {
        console.log('start')
        setContractBalance(parseFloat(ethers.utils.formatUnits(await contract.getBalance())).toFixed(4))
        setWalletBalance(await getWalletBalance(walletAddress))
        setYourProfit(parseFloat(ethers.utils.formatUnits(await contract.striperRewards(walletAddress))).toFixed(4))
        setYourStrippers(parseFloat(await contract.getMyMiners(walletAddress)))
        setReferUrl('striperApp/'+walletAddress)
        console.log('end')
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
        // size='large'
        sx={{
          zIndex: 1000,
          position: "fixed",
          top: "40px",
          right: "23px",
          width: 150,
          height: 64,
          backgroundColor: "#135BE8",
          color: "white",
          fontSize: "18px",
          // boxShadow: "rgb(0 0 0 / 59%) 6px 6px 20px 6px",
          "&:hover": {
            opacity: 0.7,
            backgroundColor: "#135BE8",
          },
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
      spacing={2}
      mx="auto"
      maxWidth={430}
      pb={3}
    >
      {connectWalletButton()}
      <Link to="/">
        <img src={LogoImg} alt="Jiggly Bits" />
      </Link>
      <Typography
        variant="h4"
        color="txtFirst"
        textAlign="center"
        textTransform="uppercase"
        sx={{cursor: "default"}}
      >
        Jiggly Bits
      </Typography>

      <SectionContact />
      <SectionBuyBNB walletAddress={walletAddress} 
      contract={contract} 
      contractBalance={contractBalance} 
      setContractBalance={setContractBalance} 
      walletBalance={walletBalance}
      yourProfit={yourProfit}
      yourStrippers={yourStrippers}/>
      <SectionDaily />
      <SectionRefer referUrl={referUrl} />

    </Stack>
  )
}

export default HomePage;