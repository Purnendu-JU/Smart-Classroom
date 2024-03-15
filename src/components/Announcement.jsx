import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import Navbar from './Navbar';

const AnnouncementSection = () => {
  const [announcementTitle, setAnnouncementTitle] = useState('');
  const [announcementContent, setAnnouncementContent] = useState('');
  const [announcements, setAnnouncements] = useState([]);

  const handlePostAnnouncement = () => {
    if (announcementTitle.trim() !== '' && announcementContent.trim() !== '') {
      setAnnouncements((prevAnnouncements) => [
        ...prevAnnouncements,
        {
          title: announcementTitle.trim(),
          content: announcementContent.trim(),
        },
      ]);

      // Reset the form fields
      setAnnouncementTitle('');
      setAnnouncementContent('');
    }
  };

  return (
    <Container sx={{border:'solid thick #FC6736', borderRadius:'1%', marginTop:'50px', backgroundColor:'lavenderblush' }}>
      <Typography variant="h3" component="div" sx={{ mt: 2, mb: 4 }}>
        Announcement Section
      </Typography>
      <TextField
        fullWidth
        label="Announcement Title"
        variant="outlined"
        margin="normal"
        value={announcementTitle}
        onChange={(e) => setAnnouncementTitle(e.target.value)}
      />
      <TextField
        fullWidth
        multiline
        rows={4}
        label="Announcement Content"
        variant="outlined"
        margin="normal"
        value={announcementContent}
        onChange={(e) => setAnnouncementContent(e.target.value)}
        sx={{ mt: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handlePostAnnouncement}
        sx={{ mt: 2 }}
      >
        Post Announcement
      </Button>
      <Typography variant="h5" component="div" sx={{ mt: 4, mb: 2 }}>
        Announcements
      </Typography>
      {announcements.map((announcement, index) => (
        <div key={index}>
          <Typography variant="h6">{announcement.title}</Typography>
          <Typography variant="body1">{announcement.content}</Typography>
        </div>
      ))}
    </Container>
  );
};

export default AnnouncementSection;
