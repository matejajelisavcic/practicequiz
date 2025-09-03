# Quiz Application

This is a simple quiz application built with vanilla JavaScript. The application presents a series of questions to the user, collects their answers, and provides feedback on their performance after they submit their responses.

## Project Structure

```
quiz-app
├── index.html        # The main HTML file for the quiz application
├── src
│   ├── app.js        # JavaScript file that handles quiz logic
│   └── questions.js   # JavaScript file that contains the quiz questions
└── README.md         # Documentation for the project
```

## Files Description

- **index.html**: Contains the structure of the quiz application, including HTML elements for displaying questions, input fields for answers, and buttons for submitting answers and grading the quiz.

- **src/app.js**: The main JavaScript file that manages the quiz flow, displaying one question at a time, collecting answers, and grading the quiz upon completion.

- **src/questions.js**: Exports an array of static question objects. Each object includes a question string and the correct answer. The questions remain the same every time the application is loaded.

## How to Run the Application

1. Clone the repository or download the project files.
2. Open `index.html` in a web browser.
3. Follow the on-screen instructions to complete the quiz.

## Features

- One question is displayed at a time.
- User inputs their answer for each question.
- After answering all questions, the user can submit their answers to see the results.
- The correct answers are displayed after grading.

## License

This project is open-source and available under the MIT License.