import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { CenterFocusStrong } from '@mui/icons-material';

const JoinClass = () => {
  const [classCode, setClassCode] = useState('');

  const handleJoinClass = () => {
    // Add logic to handle joining the class with the provided class code
    alert(`Joining class with code: ${classCode}`);
    // You can implement the logic to join the class here
  };

  return (
    <Container sx={{border:'solid thick #FC6736', borderRadius:'1%', marginTop:'70px', backgroundColor:'lavenderblush' }}>
      <Typography variant="h2" component="div" sx={{ mt: 2, mb: 4 }}>
        Join a Class
      </Typography>
      <Typography variant="h5" component="div" sx={{ mt: 2, mb: 4 }}>
        Ask your teacher for the class code
      </Typography>
      <TextField
        fullWidth
        label="Class Code"
        variant="outlined"
        margin="normal"
        value={classCode}
        onChange={(e) => setClassCode(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleJoinClass}
        sx={{ mt: 2, marginBottom:'20px'}}
      >
        Join Class
      </Button>
    </Container>
  );
};

export default JoinClass;
