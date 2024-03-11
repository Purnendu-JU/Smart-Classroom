import React, { useState } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';

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
          file: file,
        },
      ]);
      setMessage('');
      setFile(null);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  return (
    <Container sx={{ border: 'solid thick #FC6736', borderRadius: '1%', marginTop: '70px', backgroundColor:'lavenderblush'}}>
      <Typography variant="h2" component="div" sx={{ mt: 2, mb: 4 }}>
        Community
      </Typography>
      <List sx={{ maxHeight: 300, overflowY: 'auto' }}>
        {messages.map((msg, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${msg.user}: ${msg.message}`} />
            {msg.file && (
              <a href={URL.createObjectURL(msg.file)} target="_blank" rel="noopener noreferrer">
                View File
              </a>
            )}
          </ListItem>
        ))}
      </List>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          margin="normal"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        
        
      </div>
      <div><input type="file" onChange={handleFileChange} sx={{ display: 'none', marginTop:'10px' }} /></div>
      <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSendMessage}
        sx={{ mt: 2, marginBottom: '20px', marginLeft: '10px' }}
      >
        <SendIcon />
      </Button>
      </div>
      
      
    </Container>
  );
};

export default Community;
