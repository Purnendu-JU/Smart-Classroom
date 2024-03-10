import React, { useState } from 'react';
import {  Container,  Typography,  TextField,  Button,  Radio,  RadioGroup,  FormControlLabel,  FormControl,  FormLabel} from '@mui/material';

const QuizSection = () => {
  const [quizTitle, setQuizTitle] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctOption, setCorrectOption] = useState('');

  const handleAddQuestion = () => {
    if (currentQuestion.trim() !== '' && options.every((opt) => opt.trim() !== '') && correctOption.trim() !== '') {
      setQuestions((prevQuestions) => [
        ...prevQuestions,
        {
          question: currentQuestion.trim(),
          options: options.map((opt) => opt.trim()),
          correctOption: correctOption.trim(),
        },
      ]);

      // Reset the current question and options
      setCurrentQuestion('');
      setOptions(['', '', '', '']);
      setCorrectOption('');
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="div" sx={{ mt: 2, mb: 4 }}>
        Quiz Section
      </Typography>
      <TextField
        fullWidth
        label="Quiz Title"
        variant="outlined"
        margin="normal"
        value={quizTitle}
        onChange={(e) => setQuizTitle(e.target.value)}
      />
      <FormControl component="fieldset" sx={{ mt: 2 }}>
        <FormLabel component="legend">Add Question</FormLabel>
        <TextField
          fullWidth
          label="Question"
          variant="outlined"
          margin="normal"
          value={currentQuestion}
          onChange={(e) => setCurrentQuestion(e.target.value)}
        />
        {options.map((opt, index) => (
          <TextField
            key={index}
            fullWidth
            label={`Option ${index + 1}`}
            variant="outlined"
            margin="normal"
            value={opt}
            onChange={(e) => {
              const updatedOptions = [...options];
              updatedOptions[index] = e.target.value;
              setOptions(updatedOptions);
            }}
          />
        ))}
        <TextField
          fullWidth
          label="Correct Option"
          variant="outlined"
          margin="normal"
          value={correctOption}
          onChange={(e) => setCorrectOption(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddQuestion}
          sx={{ mt: 2 }}
        >
          Add Question
        </Button>
      </FormControl>
      <Typography variant="h5" component="div" sx={{ mt: 4, mb: 2 }}>
        Quiz Questions
      </Typography>
      {questions.map((q, index) => (
        <div key={index}>
          <Typography variant="subtitle1">{`${index + 1}. ${q.question}`}</Typography>
          <RadioGroup>
            {q.options.map((opt, optIndex) => (
              <FormControlLabel
                key={optIndex}
                value={opt}
                control={<Radio />}
                label={opt}
                disabled
                checked={opt === q.correctOption}
              />
            ))}
          </RadioGroup>
        </div>
      ))}
    </Container>
  );
};

export default QuizSection;
