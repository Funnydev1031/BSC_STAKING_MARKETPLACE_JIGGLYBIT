import React from "react";
import {
  Typography,
  Box,
  InputBase,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import {
  CardContainer,
  CardItem,
  ButtonFirst,
  ButtonSecond,
  InputLink,
} from "../../../components";

const SectionRefer = ({ referUrl}) => {
  return (
    <CardContainer>
      <Typography variant="h6" textAlign="center" mb={1}>
        Referral Link
      </Typography>
      <InputLink referUrl ={referUrl}></InputLink>
      <Typography variant="body2" textAlign="center">
        Earn 12% of the Dev fee, from the BNB used to buy strip clubs, from
        anyone who uses your referral link
      </Typography>
    </CardContainer>
  );
};
export default SectionRefer;
