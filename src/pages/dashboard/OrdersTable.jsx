import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { NumericFormat } from 'react-number-format';
import Dot from 'components/@extended/Dot';
import avatar1 from 'assets/images/users/avatar-1.png';
import { Avatar } from '@mui/material';

function createData(tracking_no, name, fat, carbs, protein) {
  return { tracking_no, name, fat, carbs, protein };
}

const rows = [
  createData(84564564, 'Camera Lens', 40, 2, 40570),
  createData(98764564, 'Laptop', 300, 0, 180139),
  createData(98756325, 'Mobile', 355, 1, 90989),
  createData(98652366, 'Handset', 50, 1, 10239),
  createData(13286564, 'Computer Accessories', 100, 1, 83348),
  createData(86739658, 'TV', 99, 0, 410780),
  createData(13256498, 'Keyboard', 125, 2, 70999),
  createData(13286564, 'Computer Accessories', 100, 1, 83348),


];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'tracking_no',
    align: 'left',
    disablePadding: false,
    label: 'Order No.'
  },
  {
    id: 'name',
    align: 'left',
    disablePadding: true,
    label: 'Customer'
  },
  {
    id: 'carbs',
    align: 'left',
    disablePadding: false,
    label: 'Status'
  },
  {
    id: 'protein',
    align: 'right',
    disablePadding: false,
    label: 'Total Amount'
  }
];

function OrderTableHead({ order, orderBy }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            sx={{color:"#ffff"}}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

OrderTableHead.propTypes = { order: PropTypes.string.isRequired, orderBy: PropTypes.string.isRequired };

function OrderStatus({ status }) {
  let backgroundColor;
  let title;

  switch (status) {
    case 0:
      backgroundColor = 'warning.main';
      title = 'Pending';
      break;
    case 1:
      backgroundColor = 'success.main';
      title = 'Approved';
      break;
    case 2:
      backgroundColor = 'error.main';
      title = 'Rejected';
      break;
    default:
      backgroundColor = 'primary.main';
      title = 'None';
  }

  return (
    <Box
      sx={{
        display: 'inline-block',
        padding: '0.25rem 0.75rem',
        borderRadius: '12px',
        backgroundColor,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        minWidth: '80px'
      }}
    >
      {title}
    </Box>
  );
}

OrderStatus.propTypes = { status: PropTypes.number.isRequired };



export default function OrderTable() {
  const order = 'asc';
  const orderBy = 'tracking_no';

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          color:"#ffff",
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table aria-labelledby="tableTitle">
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody sx={{color:"#ffff"}}>
            {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 },color:"#ffff" }}
                  tabIndex={-1}
                  key={row.tracking_no}
                >
                  <TableCell component="th" id={labelId} scope="row" sx={{color:"#ffff"}}>
                 <Box sx={{display:"flex"}}> 
                  <Avatar  src={avatar1}/>
                 <Link color="secondary" sx={{marginTop:"9px",marginLeft:"8px"}}>{row.tracking_no}</Link></Box>
                  </TableCell>
                  <TableCell sx={{color:"#ffff"}}>{row.name}</TableCell>
                 
                  <TableCell sx={{color:"#ffff"}}>
                  <NumericFormat sx={{color:"#ffff"}} value={row.protein} displayType="text" thousandSeparator prefix="$" />
                   
                  </TableCell>
                  <TableCell align="right">
                  <OrderStatus status={row.carbs} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
