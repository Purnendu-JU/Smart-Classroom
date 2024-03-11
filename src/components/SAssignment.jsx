import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Input } from '@mui/material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const SAssignment = () => {
  const [assignmentTitle, setAssignmentTitle] = useState('');
  const [assignmentFile, setAssignmentFile] = useState(null);

  const handleSubmitAssignment = () => {
    // Add logic to submit the assignment and file to your database or API
    console.log('Assignment Submitted:', { assignmentTitle, assignmentFile });
    // You may want to redirect the user or show a success message
  };

  return (
    <Container sx={{border:'solid thick #FC6736',borderRadius:'1%', mt: 4, backgroundColor:'lavenderblush'}}>
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
        onClick={handleSubmitAssignment}
        sx={{ mt: 2 , mb:4}}
        endIcon={<AssignmentTurnedInIcon />}
      >
        Submit Assignment
      </Button>
    </Container>
  );
};

export default SAssignment;
