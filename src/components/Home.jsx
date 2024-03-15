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
      <Typography variant="h3" component="div" sx={{ mt: 2, mb: 4 }}>
        My Classes
      </Typography>
      <Grid container spacing={3}>
        {classesData.map((classInfo) => (
          <Grid item key={classInfo.id} xs={12} sm={6} md={4} lg={3}>
            <Card  sx={{border:'solid black',boxShadow: 5, backgroundColor:'lavender', borderRadius:'8%' }}>
              <Avatar sx={{ width: 90, height: 90, margin: '0 auto',border: 'solid black',color:'lavenderblush', marginTop: 8 }}></Avatar>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  {classInfo.className}
                </Typography>
                <Typography color="textSecondary">Teacher: {classInfo.teacher}</Typography>
              </CardContent>
              <Button variant="contained" color="primary" fullWidth>
                Enter Class
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
