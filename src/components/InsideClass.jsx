import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import PeopleIcon from '@mui/icons-material/People';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const InsideClass = () => {
  return (
    <Container sx={{border:'solid thick #FC6736', mt:4, backgroundColor:'lavenderblush'}}>
      <Typography variant="h3" component="div" sx={{ mt: 2, mb: 4 }}>
        Inside Class
      </Typography>
      <Grid container spacing={3}>
        {/* Assignments Card */}
        <Grid item xs={12} sm={6}>
          <Card sx={{backgroundColor:'greenyellow', border:'solid black'}}>
            <CardContent>
              <AssignmentIcon sx={{ fontSize: 40, color: 'blue' }} />
              <Typography variant="h5" component="div" sx={{ mt: 2 }}>
                Assignments
              </Typography>
              {/* Add your assignment-related content here */}
            </CardContent>
          </Card>
        </Grid>

        {/* Announcements Card */}
        <Grid item xs={12} sm={6}>
          <Card sx={{backgroundColor:'greenyellow' ,border:'solid black'}}>
            <CardContent>
              <AnnouncementIcon sx={{ fontSize: 40, color: 'green' }} />
              <Typography variant="h5" component="div" sx={{ mt: 2 }}>
                Announcements
              </Typography>
              {/* Add your announcement-related content here */}
            </CardContent>
          </Card>
        </Grid>

        {/* Community Card */}
        <Grid item xs={12} sm={6}>
          <Card sx={{backgroundColor:'greenyellow', border:'solid black'}}>
            <CardContent>
              <PeopleIcon sx={{ fontSize: 40, color: 'orange' }} />
              <Typography variant="h5" component="div" sx={{ mt: 2 }}>
                Community
              </Typography>
              {/* Add your community-related content here */}
            </CardContent>
          </Card>
        </Grid>

        {/* Attendance Card */}
        <Grid item xs={12} sm={6}>
          <Card sx={{mb:4, backgroundColor:'greenyellow', border:'solid black'}}>
            <CardContent>
              <EventAvailableIcon sx={{ fontSize: 40, color: 'purple' }} />
              <Typography variant="h5" component="div" sx={{ mt: 2 }}>
                Attendance
              </Typography>
              {/* Add your attendance-related content here */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InsideClass;
