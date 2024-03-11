import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'

const TAssignment = () => {
  const [assignmentTitle, setAssignmentTitle] = useState('');
  const [assignmentFile, setAssignmentFile] = useState(null);

  const handlePostAssignment = () => {
    // Add logic to post the assignment and file to your database or API
    console.log('Assignment Posted:', { assignmentTitle, assignmentFile });
    // You may want to redirect the user or show a success message
  };

  return (
    <Container sx={{border:'solid thick #FC6736', mt:4, backgroundColor:'lavenderblush'}}>
      <Typography variant="h2" component="div" sx={{ mt: 2, mb: 4 }}>
        Assignment
      </Typography>
      <TextField
        fullWidth
        label="Assignment Title"
        variant="outlined"
        margin="normal"
        value={assignmentTitle}
        onChange={(e) => setAssignmentTitle(e.target.value)}
      />
      <Input
        fullWidth
        type="file"
        accept=".pdf"
        onChange={(e) => setAssignmentFile(e.target.files[0])}
        sx={{ mt: 2, mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handlePostAssignment}
        sx={{ mt: 2, mb:4 }}
        endIcon={<SendIcon />}
      >
        Post Assignment
      </Button>
    </Container>
  );
};

export default TAssignment;
