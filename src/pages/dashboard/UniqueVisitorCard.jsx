import { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MainCard from 'components/MainCard';
import IncomeAreaChart from './IncomeAreaChart';

export default function UniqueVisitorCard() {
  const [slot, setSlot] = useState('week');
  const height  = 180;

  return (
    <>
     <Grid container alignItems="center" justifyContent="space-between" >
  <Grid item>
    <Typography variant="h4" sx={{ color: "#ffffff" }}>Activity</Typography>
  </Grid>
  <Grid item>
    <Stack direction="row" alignItems="center" spacing={0}>
      <Button
        size="small"
        onClick={() => setSlot('month')}
        sx={{
          color: slot === 'month' ? 'blue' : '#ffffff',
          borderColor: slot === 'month' ? 'blue' : '#ffffff'
        }}
        variant={slot === 'month' ? 'outlined' : 'text'}
      >
        Month
      </Button>
      <Button
        size="small"
        onClick={() => setSlot('week')}
        sx={{
          color: slot === 'week' ? 'blue' : '#ffffff',
          borderColor: slot === 'week' ? 'blue' : '#ffffff'
        }}
        variant={slot === 'week' ? 'outlined' : 'text'}
      >
        Week
      </Button>
    </Stack>
  </Grid>
</Grid>

      <MainCard content={false} sx={{ mt: 1.5,backgroundColor:"#20202a" }}>
        <Box sx={{ pt: 1, pr: 2 }}>
          <IncomeAreaChart slot={slot} height={height} />
        </Box>
      </MainCard>
    </>
  );
}
