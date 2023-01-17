var questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers:
      [
        { text: "<scripting>", correctAnswer: false },
        { text: "<script>", correctAnswer: true },
        { text: "<js>", correctAnswer: false },
        { text: "<javascript>", correctAnswer: false }
      ],
  },

  {
    question: "Where is the correct place to insert a JavaScript?",
    answers:
      [
        { text: "Both the <head> section and the <body> section are correct", correctAnswer: true },
        { text: "The <head> section", correctAnswer: false },
        { text: "The <body> section", correctAnswer: false },
        { text: "Into a <div> section", correctAnswer: false },
      ],
  },

  {
    question: "How do you write 'Hello World' in an alert box?",
    answers:
      [
        { text: "alertBox('Hello World');", correctAnswer: false },
        { text: "alert('HelloWorld');", correctAnswer: true },
        { text: "msg('Hello World');", correctAnswer: false },
        { text: "msgBox('Hello World');", correctAnswer: false },
      ],
  },

  {
    question: "How do you create a function in JavaScript?",
    answers:
      [
        { text: "function = myFunction()", correctAnswer: false },
        { text: "function myFunction()", correctAnswer: true },
        { text: "function:myFunction()", correctAnswer: false },
        { text: "Function = myFunction()", correctAnswer: false },
      ],
  },

  {
    question: "How do you call a function?",
    answers:
      [
        { text: "call myFunction()", correctAnswer: false },
        { text: "myFunction()", correctAnswer: true },
        { text: "call function myFunction()", correctAnswer: false },
        { text: "call Function myFunction()", correctAnswer: false },
      ]
  }
];
