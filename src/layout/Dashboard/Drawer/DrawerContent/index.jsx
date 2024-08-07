// project import
import { height } from '@mui/system';

import Navigation from './Navigation';
import SimpleBar from 'components/third-party/SimpleBar';

// ==============================|| DRAWER CONTENT ||============================== //

export default function DrawerContent() {
  return (
    <>
      <SimpleBar sx={{ '& .simplebar-content': { display: 'flex', flexDirection: 'column',height:"92vh" },backgroundColor:"#20202a"}}>
        <Navigation />
    
      </SimpleBar>
    </>
  );
}
