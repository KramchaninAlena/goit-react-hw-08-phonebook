import { Typography } from '@mui/material';

const HomePage = () => {
  return (
    <div >
      <Typography variant="h3" component="h3" mt={5} align={'center'}>
        Welcome to the contact book application
      </Typography>

      <Typography variant="h6" component="h3" mt={2} align={'center'}>
        "Easy to find, quick to connect: your contact world is inside."
      </Typography>
    </div>
  );
};

export default HomePage;
