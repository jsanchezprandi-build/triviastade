document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        { question: "¿Quién dijo la renombrada expresión: Me estoy dificultando, en qué lugar y bajo qué circunstancia?", choices: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], answer: "Opción 1" },
        { question: "¿Quién fue el primer 'novio' de Anita y quién le hizo terapia luego. 'por qué hacés esto?'", choices: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], answer: "Opción 2" },
        { question: "¿Quién manejó la camioneta de alen luego del asado del siglo en la Balanza y qué le impedía al copiloto manejar?", choices: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], answer: "Opción 3" },
        { question: "¿Cómo se llamaba el equipo francés que pretendía que matute mostrar su culo luego de un partido de PSG y quién lo trajo?", choices: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], answer: "Opción 1" },
        { question: "¿Quién estaba en el poster del bondi que usábamos normalmente y que empezamos a hacer preguntas límites del tipo: Qué hacés si viene y te pide.....?", choices: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], answer: "Opción 1" },
        { question: "¿Quién se acalambraba si no se bañaba post práctica?", choices: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], answer: "Opción 1" },
        { question: "¿Cómo era la jugada 3? Hoy en día se podría hacer?", choices: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], answer: "Opción 1" },
        { question: "¿Quiénes se cagaron a trompadas en el acto constitucional del Stade y en dónde estábamos?", choices: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], answer: "Opción 1" },
        { question: "¿Qué edad tiene Ignacio Inchausti?", choices: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], answer: "Opción 1" },
        { question: "¿Quién es de todo el Stade el que ha tenido más noche?", choices: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], answer: "Opción 1" },
        { question: "¿Quién terminó peor al salir del casorio de Alfredo?", choices: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], answer: "Opción 1" },
        { question: "¿Quién es el que ha sido más mencionado en medios?", choices: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], answer: "Opción 1" },
        { question: "¿Qué dijo Javalí para que el coach le diera vuelta la cara de una piña?", choices: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], answer: "Opción 1" },
        { question: "¿Cuál fue el familiar del Stade que más acompañó al costado de la cancha?", choices: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], answer: "Opción 1" },
        { question: "¿En qué año fue la última vez que Renzo vino a un asado?", choices: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], answer: "Opción 1" },
        { question: "¿Qué le regaló Darío a Gonchi en el primer elefante blanco?", choices: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], answer: "Opción 1" },
        { question: "¿Cuántos títulos consiguió el Stade?", choices: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], answer: "Opción 1" },
        { question: "¿Cuál fue la peor derrota del Stade?", choices: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], answer: "Opción 1" },
        { question: "¿Cuál era el equipo titular del Stade en 2003?", choices: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], answer: "Opción 1" },
        { question: "¿Quién dijo con toda seguridad: 'tengo más visión de cancha que Bernardo Amarillo'?", choices: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], answer: "Opción 1" },
        { question: "¿Cómo se llaman las Focateens?", choices: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], answer: "Opción 1" },
        { question: "¿Quién o quiénes del Stade estuvieron denunciados en un calabozo?", choices: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], answer: "Opción 1" },
        { question: "¿Con qué cortaba el Vodka Gonchi cuando tenía 17 años?", choices: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], answer: "Opción 1" }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    const maxQuestions = 7;
    let selectedChoice = null;

    // Función para mezclar el array de preguntas
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(questions); // Mezclar las preguntas
    const selectedQuestions = questions.slice(0, maxQuestions); // Seleccionar las primeras 7 preguntas mezcladas

    const startScreen = document.getElementById('start-screen');
    const gameScreen = document.getElementById('game-screen');
    const endScreen = document.getElementById('end-screen');
    const questionContainer = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    const nextButton = document.getElementById('next-button');
    const finalScoreElement = document.getElementById('final-score');

    document.getElementById('start-button').addEventListener('click', startGame);
    document.getElementById('next-button').addEventListener('click', nextQuestion);
    document.getElementById('restart-button').addEventListener('click', restartGame);

    function startGame() {
        console.log("Juego iniciado");
        startScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');
        currentQuestionIndex = 0;
        score = 0;
        showQuestion();
    }

    function showQuestion() {
        console.log("Mostrando pregunta:", currentQuestionIndex);
        const questionData = selectedQuestions[currentQuestionIndex];
        questionElement.textContent = questionData.question;
        choicesElement.innerHTML = '';
        selectedChoice = null;
        nextButton.classList.add('hidden');  // Ocultar el botón "Siguiente"
        questionData.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice;
            button.addEventListener('click', () => selectAnswer(button, choice));
            choicesElement.appendChild(button);
        });
    }

    function selectAnswer(button, choice) {
        if (selectedChoice) {
            selectedChoice.classList.remove('selected');
        }
        button.classList.add('selected');
        selectedChoice = button;
        nextButton.classList.remove('hidden');  // Mostrar el botón "Siguiente" después de seleccionar una respuesta
    }

    function nextQuestion() {
        if (!selectedChoice) return;

        const questionData = selectedQuestions[currentQuestionIndex];
        if (selectedChoice.textContent === questionData.answer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < maxQuestions && currentQuestionIndex < selectedQuestions.length) {
            showQuestion();
        } else {
            endGame();
        }
        nextButton.classList.add('hidden');  // Ocultar el botón "Siguiente" después de avanzar de pregunta
    }

    function endGame() {
        gameScreen.classList.add('hidden');
        endScreen.classList.remove('hidden');

        let finalMessage = `Tu puntaje final es ${score} de ${maxQuestions}. `;
        if (score <= 3) {
            finalMessage += "El Tío sigue con dudas. No lo estás ayudando. Sos una vergüenza para la Historia del Stade.";
        } else if (score === 4) {
            finalMessage += "Tenés que instruirte más y ayudar mejor al Tío. Todavía no merecés su linaje.";
        } else if (score === 5) {
            finalMessage += "El Tío te agradece tu aporte. Te invita a un whisky con él.";
        } else if (score === 6) {
            finalMessage += "¡Genial! Sos un digno componente del grupo de seres humanos de mierda.";
        } else if (score === 7) {
            finalMessage += "Sos un digno sobrino del Tío Goluá. El Tío nunca va a morir pero si se diera el caso tiene un buen sucesor.";
        }

        finalScoreElement.textContent = finalMessage;
    }

    function restartGame() {
        endScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
        shuffle(questions); // Volver a mezclar las preguntas
        selectedQuestions.splice(0, maxQuestions, ...questions.slice(0, maxQuestions)); // Seleccionar nuevas preguntas
    }
});
