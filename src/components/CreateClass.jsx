import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const CreateClass = () => {
  const [className, setClassName] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [classCode, setClassCode] = useState('');

  const generateRandomCode = () => {
    // Generates a random 6-digit alphanumeric code
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  };

  const handleCreateClass = () => {
    // Add logic to handle creating the class with the provided details
    console.log(`Creating class: ${className} - ${subjectName}`);
    // You can implement the logic to create the class here

    // Generate and set the class code
    const code = generateRandomCode();
    setClassCode(code);
  };

  return (
    <Container sx={{border:'solid thick #FC6736', borderRadius:'1%', marginTop:'70px', backgroundColor:'lavenderblush'}}>
      <Typography variant="h4" component="div" sx={{ mt: 2, mb: 4 }}>
        Create Class
      </Typography>
      <TextField
        fullWidth
        label="Class Name"
        variant="outlined"
        margin="normal"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
      />
      <TextField
        fullWidth
        label="Subject Name"
        variant="outlined"
        margin="normal"
        value={subjectName}
        onChange={(e) => setSubjectName(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleCreateClass}
        sx={{ mt: 2, marginBottom:'20px' }}
      >
        Create Class
      </Button>
      {classCode && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          Class Code: {classCode}
        </Typography>
      )}
    </Container>
  );
};

export default CreateClass;
