import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  InputBase,
  Button,
  Divider,
  Stack,
  Link,
} from "@mui/material";
import {
  CardContainerTrans,
  CardItem,
  ButtonFirst,
  ButtonSecond,
  InputBNB,
} from "../../../components";
import { getContract, getSigner } from "../../util/commonFunc";
import { ethers } from "ethers";
import Telegram from "../../../assets/images/Telegram.png";
import Twitter from "../../../assets/images/Twitter.png";

const SectionContact = () => {
  return (
    <CardContainerTrans>
      {/* <CardItem>
        <Typography variant="body1" color="txtTitle">
          {" "}
          Contract{" "}
        </Typography>
      </CardItem>
      <CardItem>
        <Typography variant="body1" color="txtTitle">
          {" "}
          Wallet{" "}
        </Typography>
        <Typography variant="h6" color="txtFirst">
          {" "}
          0 BNB{" "}
        </Typography>
      </CardItem>
      <CardItem>
        <Typography variant="body1" color="txtTitle">
          {" "}
          Your Strippers{" "}
        </Typography>
      </CardItem>

      <CardItem>
        <Typography variant="body1" color="txtTitle">
          {" "}
          Your Profit{" "}
        </Typography>
      </CardItem>

      <ButtonFirst>Buy Strip Club</ButtonFirst>

      <Divider sx={{ mt: 2, mb: 3 }} /> */}

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        mx="auto"
        maxWidth={430}
        mb={'21px'}
      >
        <Link
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100%",
            width: 53,
            height: 53,
            backgroundColor: "white",
          }}
          href="https://t.me/+tCAQcjB67Us3MGEx"
          target="_blank"
        >
          <img src={Telegram} alt="Telegram" />
        </Link>
        <Link
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100%",
            width: 53,
            height: 53,
            backgroundColor: "white",
          }}
          href="https://twitter.com/jigglybitsminer?s=21&t=r4Kw6j8IOg52eBASdnJzSw"
          target="_blank"
        >
          <img src={Twitter} alt="Twitter" />
        </Link>
      </Stack>

      <Typography variant="body1" color="txtTitle" textAlign="center" mb={2.5}>
        The BNB Reward Pool with the sexiest daily return and lowest dev fee
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        spacing={1.5}
        mx="auto"
        maxWidth={430}
        mb={1}
      >
        <Box sx={{ width: "100%" }}>
          <ButtonFirst>Lite paper</ButtonFirst>
        </Box>
        <Box sx={{ width: "100%" }}>
          <ButtonFirst>Audit</ButtonFirst>
        </Box>
      </Stack>
    </CardContainerTrans>
  );
};
export default SectionContact;
