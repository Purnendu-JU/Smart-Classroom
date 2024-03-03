import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default

function Landing() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Smart Classroom
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h5" component="h2">
                Attendance
              </Typography>
              <Link href="#" variant="body1">
                Take Attendance
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h5" component="h2">
                Assignments/Study Materials
              </Typography>
              <Link href="#" variant="body1">
                View Assignments
              </Link>
              <Link href="#" variant="body1">
                Add Study Materials
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h5" component="h2">
                Polls
              </Typography>
              <Link href="#" variant="body1">
                Create Poll
              </Link>
              <Link href="#" variant="body1">
                View Poll Results
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h5" component="h2">
                Posts
              </Typography>
              <Link href="#" variant="body1">
                Create Post
              </Link>
              <Link href="#" variant="body1">
                View Posts
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h5" component="h2">
                Community
              </Typography>
              <Link href="#" variant="body1">
                Join Community
              </Link>
              <Link href="#" variant="body1">
                View Community
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}