import React from 'react';
import { Container, Typography, Card, CardContent, Button, Grid, Avatar } from '@mui/material';

const classesData = [
  { id: 1, className: 'Mathematics', teacher: 'PKM', teacherAvatar: 'M' },
  { id: 2, className: 'Science', teacher: 'PKM', teacherAvatar: 'J' },
  // Add more classes as needed
];

const Home = () => {
    
  return (
    <Container>
      <Typography variant="h4" component="div" sx={{ mt: 2, mb: 4 }}>
        My Classes
      </Typography>
      <Grid container spacing={3}>
        {classesData.map((classInfo) => (
          <Grid item key={classInfo.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Avatar sx={{ width: 100, height: 100, margin: '0 auto', marginTop: 10 }}>{classInfo.teacherAvatar}</Avatar>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {classInfo.className}
                </Typography>
                <Typography color="textSecondary">Teacher: {classInfo.teacher}</Typography>
              </CardContent>
              <Button variant="contained" color="primary" fullWidth>
                Go to Class
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
