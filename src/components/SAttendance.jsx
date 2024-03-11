import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const SAttendance = () => {
  const [attendanceCode, setAttendanceCode] = useState('');
  const [isAttendanceMarked, setIsAttendanceMarked] = useState(false);

  const handleMarkAttendance = () => {
    // Add logic to check the provided code and mark attendance
    // For simplicity, this example just checks if the code is '123456'
    const correctCode = '123456';
    if (attendanceCode === correctCode) {
      setIsAttendanceMarked(true);
      // You may want to redirect the user or show a success message
    } else {
      // Handle incorrect code case
      alert('Incorrect attendance code. Please try again.');
    }
  };

  return (
    <Container sx={{border:'solid thick #FC6736',mt:4, backgroundColor:'lavenderblush'}}>
      <Typography variant="h2" component="div" sx={{ mt: 2, mb: 4 }}>
        Attendance
      </Typography>
      {isAttendanceMarked ? (
        <Typography variant="body1" sx={{ mb: 2 }}>
          Attendance marked for today.
        </Typography>
      ) : (
        <>
          <TextField
            fullWidth
            label="Attendance Code"
            variant="outlined"
            margin="normal"
            value={attendanceCode}
            onChange={(e) => setAttendanceCode(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleMarkAttendance}
            sx={{ mt: 2 ,mb:4}}
            startIcon={<CheckIcon />}
          >
            Mark Attendance
          </Button>
        </>
      )}
    </Container>
  );
};

export default SAttendance;

