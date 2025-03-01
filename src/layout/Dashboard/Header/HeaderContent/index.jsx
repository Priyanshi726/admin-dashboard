import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';
import { GithubOutlined } from '@ant-design/icons';



export default function HeaderContent() {
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <>

      {!downLG && <Search />}
      {downLG && <Box sx={{ width: '100%', ml: 1 }} />}
      <IconButton
        component={Link}
        
        target="_blank"
        disableRipple
        color="secondary"
        
        sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
      >
        <GithubOutlined />
      </IconButton>

      <Notification />
      {!downLG && <Profile />}
      {downLG && <MobileSection />}
    </>
  );
}
