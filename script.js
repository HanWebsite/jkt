var questions = [
    {
      question: 'Gadis Koleris yang suka berimajinasi?',
      options: ['Shani', 'Indah', 'Freya', 'Zee'],
      answer: 2,
      points: 5
    },
    {
      question: 'Peduli Dan Berbaik Hati?',
      options: ['Fiony', 'Zee', 'Christy', 'Freya'],
      answer: 2,
      points: 5
    },
    {
      question: 'All is your number one?',
      options: ['Cathy', 'Ella', 'Michelle', 'Adel'],
      answer: 2,
      points: 5
    },
    {
        question: 'Jika hatimu sedang menangis?',
        options: ['Alya', 'Anindy', 'Adel', 'Zee'],
        answer: 0,
        points: 5
      },
    {
        question: '"Cring... Si peri cantik jelita?',
        options: ['Cathy', 'Ella', 'Anindy', 'Zee'],
        answer: 0,
        points: 5
    },
    {
        question: 'aku akan memancarkan kesegaran dan kebahagiaan?',
        options: ['Desy', 'Celline', 'Adel', 'Zee'],
        answer: 0,
        points: 5
    },
    {
        question: 'periang dan pencair suasana itulah aku?',
        options: ['Cathy', 'Gedis', 'Anindy', 'Zee'],
        answer: 1,
        points: 5
    },
    {
        question: 'Manis seperti gulali, imut seperti kelinci?',
        options: ['Gracie', 'Gedis', 'Michelle', 'Shani'],
        answer: 0,
        points: 5
    },
    {
        question: 'Pandangan mataku akan menyinari hatimu?',
        options: ['Greesella', 'Shani', 'Melody', 'Fiony'],
        answer: 0,
        points: 5
    },
    {
        question: 'Si gadis tomboy yang semangatnya meletup-letup?',
        options: ['Cathy', 'Ella', 'Anindy', 'Zee'],
        answer: 3,
        points: 5
    },
    {
        question: '1,2,3,4,5,6,7,8 ayo bergerak dengan ceria bersamaku?',
        options: ['Jinan', 'Ella', 'Anindy', 'Zee'],
        answer: 3,
        points: 5
    },
    {
        question: 'Victoria! Aku akan selalu memenangkan hatimu?',
        options: ['Cathy', 'Ella', 'Anindy', 'Jeane'],
        answer: 3,
        points: 5
    },
    {
        question: 'Selalu Rajin belajar dan berlatih keras?',
        options: ['Beby', 'Devi', 'Haruka', 'Zee'],
        answer: 0,
        points: 5
    },
    {
        question: 'Semanis coklat, selembut sutra?',
        options: ['Shani', 'Melody', 'Haruka', 'Beby'],
        answer: 0,
        points: 5
    },
    {
        question: 'bagaikan awan putih yang melayang dengan tenang?',
        options: ['Jinan', 'Melody', 'Jesslyn', 'Lala'],
        answer: 2,
        points: 5
    },
    {
        question: 'Tatapan pertama dan mata indahku akan membuat kalian tersihir?',
        options: ['Aya', 'Melody', 'Haruka', 'Beby'],
        answer: 0,
        points: 5
    },
    {
        question: 'Semanis coklat, selembut sutra?',
        options: ['Shani', 'Melody', 'Haruka', 'Beby'],
        answer: 0,
        points: 5
    },
    {
        question: 'Si kawaii yang  senyumnya selalu available untuk kalian semua?',
        options: ['Yori', 'Melody', 'Haruka', 'Beby'],
        answer: 0,
        points: 5
    },
    {
        question: 'Selalu tersenyum dan mudah tertawa?',
        options: ['Shani', 'Melody', 'Haruka', 'Gaby'],
        answer: 3,
        points: 5
    },
    {
        question: 'Watashi no kokoro, unlock?',
        options: ['Indira', 'Melody', 'Haruka', 'Beby'],
        answer: 0,
        points: 5
    }
  ];
  
  var currentQuestion = 0;
  var score = 0;
  
  function displayQuestion() {
    var questionDisplay = document.getElementById('question-display');
    var optionsDisplay = document.getElementById('options-display');
  
    questionDisplay.innerHTML = questions[currentQuestion].question;
  
    optionsDisplay.innerHTML = '';
    for (var i = 0; i < questions[currentQuestion].options.length; i++) {
      var option = document.createElement('div');
      option.innerHTML = '<input type="radio" name="answer" value="' + i + '"> ' + questions[currentQuestion].options[i];
      optionsDisplay.appendChild(option);
    }
  }
  
  function submitAnswer() {
    var selectedAnswer = document.querySelector('input[name="answer"]:checked');
  
    if (selectedAnswer === null) {
      return;
    }
  
    var userAnswer = parseInt(selectedAnswer.value);
  
    if (userAnswer === questions[currentQuestion].answer) {
      score += questions[currentQuestion].points;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  
    updateScoreDisplay();
  }
  
  function updateScoreDisplay() {
    var scoreDisplay = document.getElementById('score-display');
    scoreDisplay.innerHTML = 'Skor: ' + score;
  }
  
  function displayResult() {
    var questionContainer = document.querySelector('.question-container');
    questionContainer.innerHTML = '<h1>Create By Hanggar<br> Skor : ' + score + '</h1>';

  }
  
  // Memulai kuis saat halaman dimuat
  window.onload = displayQuestion;
  