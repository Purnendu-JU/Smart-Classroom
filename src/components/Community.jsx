import React, { useState } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const Community = () => {
  const [user, setUser] = useState({ displayName: 'User' }); // Simulating user authentication
  const [message, setMessage] = useState('');
  
  const [file, setFile] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (user && message.trim() !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          user: user.displayName,
          message: message.trim(),
          timestamp: new Date().toISOString(),
        },
      ]);
      setMessage('');
      setFile(null);
    }
    setMessage('');
    setFile(null);
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  return (
    <Container>
      <Typography variant="h4" component="div" sx={{ mt: 2, mb: 4 }}>
        Community
      </Typography>
      <List sx={{ maxHeight: 300, overflowY: 'auto' }}>
        {messages.map((msg, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${msg.user}: ${msg.message}`} />
            {msg.file && (
              <a
                href={URL.createObjectURL(msg.file)}
                target="_blank"
                rel="noopener noreferrer"
              >
                View File
              </a>
            )}
          </ListItem>
        ))}
      </List>
      <TextField
        fullWidth
        label="Message"
        variant="outlined"
        margin="normal"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input type="file" onChange={handleFileChange} sx={{ mt: 2 }} />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSendMessage}
        sx={{ mt: 2 }}
      >
        Send Message
      </Button>
    </Container>
  );
};

export default Community;
