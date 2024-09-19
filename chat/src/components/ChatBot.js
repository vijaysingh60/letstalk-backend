import React, { useState, useEffect } from 'react';
import './chatbot.css'; // Import the stylesheet

const questions = [
  { id: 1, text: "Welcome to the Lets Talk Support. What brings you to our mental health care website today?", options: ["Seeking therapy", "learning about mental health", "looking for resources", "connecting with support groups"] },
  { id: 2, text: "How would you prefer to receive support?", options: ["Live chat, messaging", "video sessions", "phone calls", "in-person sessions", "self-guided resources"] },
  { id: 3, text: "Are there specific mental health topics you are interested in?", options: ["anxiety", "depression", "stress management", "relationships", "self-esteem", "grief, trauma"] },
  { id: 4, text: "Have you used mental health services before?", options: ["Yes", "No"] },
  { id: 5, text: "What type of mental health professional are you looking for?", options: ["Psychologist", "Counselor", "Therapist", "Psychiatrist", "Peer support", "No preference"] },
  { id: 6, text: "What is the most important factor when choosing a therapist or counselor?", options: ["Specialization", "Gender", "Cultural background", "Experience level", "Communication style", "Availability"] },
  { id: 7, text: "How do you feel about joining a community forum or support group?", options: ["Interested", "Maybe later", "Not interested at all"] },
  { id: 8, text: "Would you like to receive personalized content or recommendations?", options: ["Yes", "No"] },
  { id: 9, text: "How often would you like to engage with mental health resources or professionals?", options: ["Daily", "Weekly", "Occasionally", "Only when needed"] },
  { id: 10, text: "Are there any barriers you face in accessing mental health care?", options: ["Cost", "Time", "Stigma", "Lack of privacy", "Difficulty finding the right provider"] }
];

const ChatBot = () => {
  const [step, setStep] = useState(0); // Track which question we are on
  const [answers, setAnswers] = useState({}); // Track user's answers
  const [userInput, setUserInput] = useState(''); // Track user input
  const [nlpAnswer, setNlpAnswer] = useState(''); // NLP response from backend
  const [botVisible, setBotVisible] = useState(false); // Control visibility of bot message
  const [optionsVisible, setOptionsVisible] = useState(false); // Control visibility of options
  const [nlpVisible, setNlpVisible] = useState(false); // Control visibility of NLP message

  // Function to send user input or selection to the backend
  const sendToBackend = async (payload) => {
    try {
      const response = await fetch('http://localhost:3000/api/submit-responses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      const nlpans = data.nlpResult.answers[0].answer;
      setNlpAnswer(nlpans);
      setNlpVisible(true); // Show NLP response after receiving
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  // Handle option selection
  const handleOptionSelect = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
    sendToBackend({ questionId, answer: option });
    setStep(step + 1);
    setBotVisible(false);
    setOptionsVisible(false);
    setNlpVisible(false); // Reset visibility for next question
  };

  // Handle user input submission
  const handleUserInput = () => {
    if (userInput.trim() === '') return;
    setAnswers({ ...answers, [questions[step].id]: userInput });
    sendToBackend({ questionId: questions[step].id, answer: userInput });
    setUserInput('');
    setStep(step + 1);
    setBotVisible(false);
    setOptionsVisible(false);
    setNlpVisible(false); // Reset visibility for next question
  };

  // Control the timing of showing bot message and options
  useEffect(() => {
    if (step < questions.length) {
      // After 1 second, show the bot message
      const botTimer = setTimeout(() => {
        setBotVisible(true);
      }, 1000);

      // After 2 seconds, show the options/buttons
      const optionsTimer = setTimeout(() => {
        setOptionsVisible(true);
      }, 2000);

      return () => {
        clearTimeout(botTimer);
        clearTimeout(optionsTimer);
      };
    }
  }, [step]);

  const currentQuestion = questions[step];

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <span>Let's Talk Assistant</span>
        {/* <button className="close-btn">✕</button> */}
      </div>
      <div className="chat-messages">
        {/* Render previous questions and answers */}
        {Object.keys(answers).map((key, idx) => (
          <div key={idx}>
            <div className="bot-que">{questions.find(q => q.id === parseInt(key)).text}</div>
            <div className="user-message">{answers[key]}</div>
          </div>
        ))}

        {/* NLP Response */}
        {nlpVisible && (
          <div className="nlp-message">{nlpAnswer}</div>
        )}

        {/* Current bot question */}
        {botVisible && (
          <div>
            <div className="bot-que">{currentQuestion.text}</div>
            {/* Bot options after delay */}
            {optionsVisible && currentQuestion.options && (
              <div className="options">
                {currentQuestion.options.map((option, idx) => (
                  <button key={idx} className="option-btn" onClick={() => handleOptionSelect(currentQuestion.id, option)}>
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Chat input if there are still questions */}
      {step < questions.length && (
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message here..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleUserInput()}
          />
          <button onClick={handleUserInput}>Send</button>
        </div>
      )}

      {/* Thank you message when the questions are completed */}
      {step >= questions.length && (
        <div className="bot-message">Thank you for completing the questionnaire. We will get back to you soon!</div>
      )}
    </div>
  );
};

export default ChatBot;
