// Function to handle user input submission
function handleUserInput(event) {
    // Check if the Enter key (key code 13) is pressed
    if (event.keyCode === 13) {
      sendMessage();
    }
  }
  
  // Attach an event listener to the input field
  document.getElementById('userInput').addEventListener('keyup', handleUserInput);
  
  // Function to send user message and receive bot response
  function sendMessage() {
    var userInput = document.getElementById('userInput').value.trim();
    
    if (userInput === '') return;
    
    appendUserMessage(userInput);
    respondToUser(userInput);
    document.getElementById('userInput').value = '';
  }
  
  // Function to append bot message to chat box
  function appendBotMessage(message) {
    var chatBox = document.getElementById('chatBox');
    var botMessageElement = document.createElement('div');
    botMessageElement.className = 'chat-message bot-message';
    botMessageElement.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(botMessageElement);
    
    // Scroll to the bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  // Function to append user message to chat box
  function appendUserMessage(message) {
    var chatBox = document.getElementById('chatBox');
    var userMessageElement = document.createElement('div');
    userMessageElement.className = 'chat-message user-message';
    userMessageElement.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(userMessageElement);
    
    // Scroll to the bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  // Function to generate bot response based on user input
  function respondToUser(userInput) {
    // Example responses; replace with actual logic or API calls
    var responses = {
      'hello': 'Hi there! How can I assist you today?',
      'how are you': 'I\'m just a bot, but thanks for asking!',
      'bye': 'Goodbye! Have a great day.',
      'hi': 'Hello!',
      'how to fill the application form': 'oho! sorry for the enconvinence with the fill of application form do one thing please contact us with navyuak sangh team they are always there to help you out, via mail or call us option to get proper guidence, Thank You!.',
      // Add more responses as needed
    };
  
    var lowercaseInput = userInput.toLowerCase();
  
    // Check if the input matches a predefined response
    if (responses[lowercaseInput]) {
      setTimeout(function() {
        appendBotMessage(responses[lowercaseInput]);
      }, 500); // Simulate a delay for a more natural conversation flow
    } else {
      setTimeout(function() {
        appendBotMessage('I\'m sorry, I don\'t understand that. Can you please rephrase?');
      }, 500); // Simulate a delay for a more natural conversation flow
    }
  }
  