var allQuestions = [
    {
        question: '1.What is highest peak of the world?',
        answers: {
            a: 'Mt Everest   ',
            b:' Mt kilimanjaro ', 
            c:'Mt Fuji  ',
            d:' Mt k2   '
          
        },
        correctAnswer: 'a'
    },
    {
        question: '2. Who developed javascript?',
        answers: {
            a: 'Brendan Eich',
            b: 'Dennis Ritchie',
            c: 'Douglas Crockford',
            d: 'Bjarne Stroustrup'
        },
        correctAnswer: 'c'
    },
    {
        question: '3. Which of the following is fruit?',
         answers:
         {   
           a: 'carrot', 
           b: 'tomato',
           c: 'cucumber', 
           d: 'pumpkin'
      }, 
      correctAnswer:'b'
    },
   
 {
        question: '4. What is the fullform of html?',
         answers:
         {   
           a: 'Hypertext Mail Language', 
           b: 'HigherText Markup Language',
           c: 'Hypertext Madeup Language', 
           d: 'HyperText Markup language'
      }, 
      correctAnswer:'d'
    },
    {
        question: '5. What is the capital of USA?',
         answers:
         {   
           a: 'New York', 
           b: 'Seattle',
           c: 'Texas', 
           d: 'None of the above'
      }, 
      correctAnswer:'d'
    }
   
    
   
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(allQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
     
        var output = [];
        var answers;
        
        for(var i=0; i<questions.length; i++){
            
           answers = [];
        
            for(letter in questions[i].answers){

                answers.push(
                    '<label>'
                        + '<input type="radio"  name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                        
                    + '</label>'
                );
            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        var answerContainers = quizContainer.querySelectorAll('.answers');
    
        var userAnswer = '';
        var numCorrect = 0;
        
        for(var i=0; i<questions.length; i++){
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
         
            if(userAnswer===questions[i].correctAnswer){
            
                numCorrect++;
                
               
                answerContainers[i].style.color = '#81b214';
            }
         
            else{
              
                answerContainers[i].style.color = 'red';
            }
        }

        
        resultsContainer.innerHTML = 'You got '+numCorrect + ' out of ' + questions.length +' answer correct.';
    }

   
    showQuestions(questions, quizContainer);
    
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}