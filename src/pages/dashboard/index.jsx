import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import './index.scss'
import MainCard from 'components/MainCard';
import { Doughnut } from 'react-chartjs-2';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import MonthlyBarChart from './MonthlyBarChart';
import ReportAreaChart from './ReportAreaChart';
import UniqueVisitorCard from './UniqueVisitorCard';
import SaleReportCard from './SaleReportCard';
import OrdersTable from './OrdersTable';
import RightCircleFilled from '@ant-design/icons/RightCircleFilled';
import GiftOutlined from '@ant-design/icons/GiftOutlined';
import MessageOutlined from '@ant-design/icons/MessageOutlined';
import SettingOutlined from '@ant-design/icons/SettingOutlined';
import ArrowUpOutlined from '@ant-design/icons/ArrowUpOutlined';
// import { ArrowUpward } from '@mui/icons-material'; 
import Chart from 'react-apexcharts';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';
import { Divider } from '@mui/material';

const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};


const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

const avatarSX1 = {
  width: 36,
  height: 32,
};

const actionSX1 = {
  marginRight: 2,
};

// const chartOptions = {
//   chart: {
//     type: 'donut',
//   },
//   plotOptions: {
//     pie: {
//       donut: {
//         size: '70%', 
//       },
//     },
//   },
//   labels: [''],
//   colors: ['#1E90FF'], 
// };

// const chartSeries = [70];
const chartOptions = {
  chart: {
    type: 'donut',
  },
  plotOptions: {
    pie: {
      donut: {
        size: '70%',
        labels: {
          // show: true,
          total: {
            // show: true,
            // label: '70%',
            // formatter: () => '70%', // Displays '70%' in the center of the donut
            style: {
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#ffff',
              backgroundColor:"#20202a",
            },
          },
        },
      },
    },
  },
  
};

const chartSeries = [80,30];

export default function DashboardDefault() {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75} >

      <Grid item xs={12} sx={{ mb: -5.75 }} >
        <Typography variant="h4" sx={{ color: "#ffff" }}>Dashboard</Typography>
      </Grid>

      <Grid item xs={12} md={7} lg={8} className='dashboard' sx={{ mt: 2 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid sx={{backgroundColor:"#20202a"}}>
            <AnalyticEcommerce title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" />
          </Grid>
          <Grid/>
        </Grid>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <AnalyticEcommerce title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" />
          </Grid>
          <Grid item />
        </Grid>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
          <AnalyticEcommerce title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" />

          </Grid>
          <Grid item />
        </Grid>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
          <AnalyticEcommerce title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" />
          </Grid>
          <Grid item />
        </Grid>
      </Grid>

      <Grid item xs={12} md={5} lg={4} >
      <Grid >
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box display="flex" justifyContent="space-between" alignItems="center" sx={{backgroundColor:"#20202a"}}>
            <List
              component="nav"
              sx={{
                px: 0,
                py: 0,
                '& .MuiListItemButton-root': {
                  
                  '& .MuiAvatar-root': avatarSX1,
                  '& .MuiListItemSecondaryAction-root': { ...actionSX1, position: 'relative' },
                },
              }}
            >
              <ListItemButton >
                <ListItemText primary={<Typography variant="subtitle1" sx={{fontSize:"12px",color:"#ffff"}}>Net Worth</Typography>} />
              </ListItemButton>
              <ListItemButton >
                <ListItemText primary={<Typography variant="subtitle1" sx={{fontSize:"12px",color:"#ffff"}}>$ 6782.89</Typography>} />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary={
                  <Stack direction="row" alignItems="center">
                    <ArrowUpOutlined className='arrow' />
                    <Typography variant="subtitle1" sx={{ color: 'forestgreen',fontSize:"20px",marginLeft:"8px"}}>3%</Typography>
                  </Stack>
                } />
              </ListItemButton>
            </List>
            <Box  sx={{backgroundColor:"#20202a"}}>
              <Chart options={chartOptions} series={chartSeries} type="donut" width="100%" height="100%" sx={{backgroundColor:"#20202a"}} />
            </Box>
          </Box>
        </MainCard>
      </Grid>
    </Grid>



      <Grid item xs={12} md={7} lg={8}>
        <UniqueVisitorCard />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h4" sx={{ color: "#ffff" }}>Transaction History</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2,backgroundColor:"#20202a" }} content={false}>
          <List
            component="nav"
            sx={{
              px: 0,
              py: 0,
              '& .MuiListItemButton-root': {
                py: 1.5,
                '& .MuiAvatar-root': avatarSX,
                '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
              }
            }}
          >
            <ListItemButton >
              <ListItemAvatar>
                <Avatar sx={{ color: 'success.main', bgcolor: 'success.lighter' }}>
                  <GiftOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1" sx={{color:"#ffff"}}>Goals</Typography>} />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <ListItemAvatar>
                    <Avatar>
                      <RightCircleFilled />
                    </Avatar>
                  </ListItemAvatar>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{ color: 'primary.main', bgcolor: 'primary.lighter' }}>
                  <MessageOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1" sx={{color:"#ffff"}}>Popular Dishes</Typography>} />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <ListItemAvatar>
                    <Avatar>
                      <RightCircleFilled />
                    </Avatar>
                  </ListItemAvatar>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{ color: 'error.main', bgcolor: 'error.lighter' }}>
                  <SettingOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1" sx={{color:"#ffff"}}>Menus</Typography>} />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <ListItemAvatar>
                    <Avatar>
                      <RightCircleFilled />
                    </Avatar>
                  </ListItemAvatar>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
          </List>
        </MainCard>

      </Grid>
   
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h4" sx={{ color: "#ffff" }}>Recent Orders</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 ,backgroundColor:"#20202a" }} content={false}>
          <OrdersTable />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h4" sx={{ color: "#ffff" }}>Customer's Feedback</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2,backgroundColor:"#20202a" }} content={false}>
      <List  sx={{ p: 0, '& .MuiListItemButton-root': { } }}>
        <ListItemButton>
          <Box display="flex" alignItems="center" sx={{marginTop:"10px"}}>
            <Avatar  src={avatar3} sx={{ mr: 2 }} />
            <ListItemText primary="Johnny Wison" sx={{color:"#ffff"}} />
          </Box>
        </ListItemButton>
        <ListItemButton>
          <Box display="flex" alignItems="center">
            <Rating value={4} readOnly precision={0.5} sx={{ mr: 2, color: 'dark yellow' }} />
           
          </Box>
        </ListItemButton>
        <ListItemButton>
          <Typography variant="body1" sx={{color:"#ffff"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </Typography>
        </ListItemButton>
        <Divider/>
        <ListItemButton>
          <Box display="flex" alignItems="center" sx={{marginTop:"10px"}}>
            <Avatar  src={avatar1} sx={{ mr: 2 }} />
            <ListItemText primary="Johnny Wison" sx={{color:"#ffff"}}/>
          </Box>
        </ListItemButton>
        <ListItemButton>
          <Box display="flex" alignItems="center">
            <Rating value={5} readOnly precision={0.5} sx={{ mr: 2, color: 'dark yellow' }} />
           
          </Box>
        </ListItemButton>
        <ListItemButton>
          <Typography variant="body1" sx={{color:"#ffff"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </Typography>
        </ListItemButton>
        <Divider/>
        <ListItemButton>
          <Box display="flex" alignItems="center" sx={{marginTop:"10px",}}>
            <Avatar  src={avatar2} sx={{ mr: 2 }} />
            <ListItemText primary="Johnny Wison" sx={{color:"#ffff"}} />
          </Box>
        </ListItemButton>
        <ListItemButton>
          <Box display="flex" alignItems="center">
            <Rating value={2} readOnly precision={0.5} sx={{ mr: 2, color: 'dark yellow' }} />
           
          </Box>
        </ListItemButton>
        <ListItemButton>
          <Typography variant="body1" sx={{color:"#ffff"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </Typography>
        </ListItemButton>
      </List>
    </MainCard>
      </Grid>

     
    </Grid>
  );
}
