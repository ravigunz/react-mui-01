import { Typography } from '@mui/material';
import './App.css';
import BasicButtons from './layouts/BasicButtons';
import Types from './layouts/Types';

function App() {
  return (
    <div className='App'>
      <Typography variant='h1' gutterBottom style={{ backgroundColor: 'grey', color: 'white'}}>Material UI Components</Typography>
      <Typography variant='h2' gutterBottom style={{ textDecoration: 'underline'}}>Typography</Typography>
      <Typography variant='h1' gutterBottom>This is Heading 1</Typography>
      <Typography variant='h2' gutterBottom>This is Heading 2</Typography>
      <Typography variant='h3' gutterBottom>This is Heading 3</Typography>
      <Typography variant='h4' gutterBottom>This is Heading 4</Typography>
      <Typography variant='h5' gutterBottom>This is Heading 5</Typography>
      <Typography variant='h6' gutterBottom>This is Heading 6</Typography>
      <BasicButtons />
      <Types />
    </div>
  );
}

export default App;
