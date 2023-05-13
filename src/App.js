import { Button, Divider, Stack, Typography } from '@mui/material';
import './App.css';
import BasicButtons from './layouts/BasicButtons';

function App() {
  return (
    <div className='App'>
      <Typography variant='h1' gutterBottom style={{ backgroundColor: 'grey', color: 'white'}}>Material UI Components</Typography>
      <Divider variant='middle'><Typography variant='h4'>Typography</Typography></Divider>

      <Typography variant='h1' gutterBottom>This is Heading 1</Typography>
      <Typography variant='h2' gutterBottom>This is Heading 2</Typography>
      <Typography variant='h3' gutterBottom>This is Heading 3</Typography>
      <Typography variant='h4' gutterBottom>This is Heading 4</Typography>
      <Typography variant='h5' gutterBottom>This is Heading 5</Typography>
      <Typography variant='h6' gutterBottom>This is Heading 6</Typography>
      <Typography variant='subtitle1' gutterBottom>This is subtitle 1</Typography>
      <Typography variant='subtitle2' gutterBottom>This is subtitle 2</Typography>
      <Typography variant='body' gutterBottom>This is body. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.</Typography>
        <Typography variant='body2' gutterBottom>This is body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.</Typography>
        <Typography variant='button' display='block' gutterBottom>Button Text</Typography>
        <Typography variant='caption' display='block' gutterBottom>Caption Text</Typography>
        <Typography variant='overline' display='block' gutterBottom>Overline Text</Typography>
   
        <Divider variant='middle'><Typography variant='h4'>Buttons</Typography></Divider>
        <Stack spacing={2} direction="row">
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant="outlined">Outlined</Button>
        </Stack>
    </div>
  );
}

export default App;
