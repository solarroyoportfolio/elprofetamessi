(function() {
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
  
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          //answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          //answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} PUNTOS`;
      //if (numCorrect >= 5)
      if (numCorrect >= 3 && (document.getElementById('pregunta-5-si').checked || document.getElementById('pregunta-7-no').checked || document.getElementById('pregunta-8-si').checked))
          return [document.getElementById("riesgo").textContent = "ALTO", document.getElementById("riesgo").style.color = "red"];
      else if (numCorrect >= 5)
                          return [document.getElementById("riesgo").textContent = "ALTO", document.getElementById("riesgo").style.color = "red"];
          else if (numCorrect >= 3)
          return [document.getElementById("riesgo").textContent = "INTERMEDIO", document.getElementById("riesgo").style.color = "#ffa700"];
      else
          return [document.getElementById("riesgo").textContent = "BAJO", document.getElementById("riesgo").style.color = "green"];
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
      {
        question: "<H3>P | PRESION ARTERIAL ALTA</H3><br>¿Usted tiene o está siendo tratado por Presión Arterial Alta (hipertensión)?",
        answers: {
          a: "SI",
          b: "NO",
        },
        correctAnswer: "a"
      },
      {
        question: "<H3>R | RONQUIDOS</H3><br>¿Usted ronca sonoramente como para ser escuchado a través de puertas cerradas o ser codeado por su pareja durante la noche?",
        answers: {
          a: "SI",
          b: "NO",
        },
        correctAnswer: "a"
      },
      {
        question: "<H3>O | OBSERVACIÓN</H3><br>¿Alguien ha observado que usted deja de respirar, que se ahoga o le falta el aire durante el sueño?",
        answers: {
          a: "SI",
          b: "NO",
        },
        correctAnswer: "a"
      },
      {
        question: "<H3>F | FATIGA</H3><br>¿Se siente usted cansado, fatigado o somnoliento durante el día? (por ejemplo, mientras maneja o trabaja)",
        answers: {
          a: "SI",
          b: "NO",
        },
        correctAnswer: "a"
      },
      {
        question: "<H3>M | MEDIDA DE CIRCUNFERENCIA DE CUELLO</H3><br>Medida a la altura de la nuez de Adán, ¿Es mayor al promedio?<br>Mujeres: 41 cm / 16 pulgadas<br>Hombres: 43 cm / 17 pulgadas",
        answers: {
          a: "SI",
          b: "NO",
        },
        correctAnswer: "a"
      },
      {
        question: "<H3>E | EDAD</H3><br>¿Es mayor de 50 años?",
        answers: {
          a: "SI",
          b: "NO",
        },
        correctAnswer: "a"
      },
      {
        question: "<H3>S | SEXO</H3><br>Seleccione su sexo",
        answers: {
          a: "FEMENINO",
          b: "MASCULINO",
        },
        correctAnswer: "b"
      },
      {
        question: "<H3>I | INDICE DE MASA CORPORAL</H3><br>¿Su índice de masa corporal es mayor a 35 Kg/m2?",
        answers: {
          a: "SI",
          b: "NO",
        },
        correctAnswer: "a"
      }
    ];
  
    // display quiz right away
    //buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  
  })();
  
  
  $('#quiz').text(function(index,text){
      return text.replace('a :','');
  });
  