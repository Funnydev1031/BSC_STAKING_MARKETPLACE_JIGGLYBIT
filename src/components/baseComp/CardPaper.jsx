
import { Paper, Box } from '@mui/material';
import { styled } from '@mui/material';

export const CardItem = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 25
}));

export const CardContainer = styled(Paper)(({theme}) => ({
  color: theme.palette.text.secondary,
  width: '100%',
  backgroundColor: 'white',
  borderRadius: 20,
  boxShadow: '0px 4px 20px rgba(36, 106, 242, 0.1)',
  padding: 30,
}));
