document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        { question: "¿Quién dijo la renombrada expresión: Me estoy dificultando, en qué lugar y bajo qué circunstancia?", choices: ["Foca. En Palma de Mallorca de viaje con las Focateens.", "Foca. Asado en la barbacoa del negro Alsina en tres cruces", "Alen. Triste en una carrera larga.", "Alen. Feliz en un asado en la barbacoa de Darío"], answer: "Foca. Asado en la barbacoa del negro Alsina en tres cruces" },
        { question: "¿Quién fue el primer 'novio' de Anita y quién le hizo terapia luego. 'por qué hacés esto?'", choices: ["Negro Bardier", "Negro Bardier", "Negro Bardier", "Negro Bardier"], answer: "Negro Bardier" },
        { question: "¿Quién manejó la camioneta de alen luego del asado del siglo en la Balanza y qué le impedía al copiloto manejar?", choices: ["Manejó: Alpedo. Copiloto: Alam, drogas duras.", "Manejó: Canario Viotti. Copiloto: Alpedo, borrachera", "Manejó: Canario Viotti. Copiloto: Alpedo, lesión en el hombro.", "Manejó: Alpedo. Copiloto: Alam, borrachera."], answer: "Manejó: Canario Viotti. Copiloto: Alpedo, lesión en el hombro." },
        { question: "¿Cómo se llamaba el equipo francés que pretendía que matute mostrar su culo luego de un partido de PSG y quién lo trajo?", choices: ["Stade Français. Foca", "Polytechnique. Matías Saiz.", "Toulouse. Machicho", "La Marseillaise. Pico"], answer: "Polytechnique. Matías Saiz." },
        { question: "¿Quién estaba en el poster del bondi que usábamos normalmente y que empezamos a hacer preguntas límites del tipo: Qué hacés si viene y te pide.....?", choices: ["Natalia Oreiro", "La Coca Sarli", "El Pato Celeste", "Graciela Alfano"], answer: "Natalia Oreiro" },
        { question: "¿Quién se acalambraba si no se bañaba post práctica?", choices: ["Miyagi", "Foca", "Alfredo Gnesetti", "Nacho Pena"], answer: "Miyagi" },
        { question: "¿Cómo era la jugada 3? Hoy en día se podría hacer?", choices: ["3 postes, de espaldas al ingoal, jugando afuera con Tormenta. No, sería pantalla", "Dársela a Darío. No, Tendría que darle el aire a Darío", "3 postes, de espaldas al ingoal. Al ciego con el Chino. Se puede hacer", "Dársela a Darío. Se puede hacer."], answer: "3 postes, de espaldas al ingoal, jugando afuera con Tormenta. No, sería pantalla" },
        { question: "¿Quiénes se cagaron a trompadas en el acto constitucional del Stade y en dónde estábamos?", choices: ["Hurling. Alfredo Gnessetti y Ruben Peña", "Hurling. Alfredo Gnessetti y Juancito Rocha", "lobby de un hotel en bs as. Chaplo y Juancito Rocha", "lobby de un hotel en bs as. Alfredo Gnessetti y Ruben Peña"], answer: "lobby de un hotel en bs as. Alfredo Gnessetti y Ruben Peña" },
        { question: "¿Qué edad tiene Ignacio Inchausti?", choices: ["35", "43", "34", "17 como siempre"], answer: "35" },
        { question: "¿Quién es de todo el Stade el que ha tenido más noche?", choices: ["Chino", "Foca", "Discutible", "Las Focateens"], answer: "Las Focateens" },
        { question: "¿Quién terminó peor al salir del casorio de Alfredo?", choices: ["La fotógrafa", "Matute", "Chapa", "Alam"], answer: "Chapa" },
        { question: "¿Quién es el que ha sido más mencionado en medios?", choices: ["Malvar y Carocó", "Bardier y el Respirone", "Juansei y Urubus", "Alan y las carreras largas"], answer: "Juansei y Urubus" },
        { question: "¿Qué dijo Javalí para que el coach le diera vuelta la cara de una piña?", choices: ["Ganso", "Pato", "Botón", "Machicho"], answer: "Ganso" },
        { question: "¿Cuál fue el familiar del Stade que más acompañó al costado de la cancha?", choices: ["Van der Westhuizen padre", "Vivo padre", "Laura", "Machicho"], answer: "Van der Westhuizen padre" },
        { question: "¿En qué año fue la última vez que Renzo vino a un asado?", choices: ["1935", "1957", "2001", "2008"], answer: "1935" },
        { question: "¿Qué le regaló Darío a Gonchi en el primer elefante blanco?", choices: ["Una sunga", "Dos sungas", "Tres sungas", "Cuatro sungas"], answer: "Una sunga" },
        { question: "¿Cuántos títulos consiguió el Stade?", choices: ["Muchos", "Bastantes", "Pocos", "Suficientes"], answer: "Suficientes" },
        { question: "¿Cuál fue la peor derrota del Stade?", choices: ["150 contra Pucarú", "89 contra Sudáfrica", "89 contra Christian", "196 contra Bella Vista"], answer: "150 contra Pucarú" },
        { question: "¿Cuál era el equipo titular del Stade en 2003?", choices: ["Todos salvo Machicho", "Nunca se repitió equipo", "Los únicos 15 que iban a practicar el jueves", "N.A."], answer: "los únicos 15 que iban a practicar el jueves" },
        { question: "¿Quién dijo con toda seguridad: 'tengo más visión de cancha que Bernardo Amarillo'?", choices: ["Quiriquiño", "Malver", "Sam Penedo", "Tito"], answer: "Sam Penedo" },
        { question: "¿Cómo se llaman las Focateens?", choices: ["Focateens", "Micho, Tito, ...", "Mariela, Marilú y Marina", "Silvia, Teresa, Juana"], answer: "Focateens" },
        { question: "¿Quién o quiénes del Stade estuvieron denunciados en un calabozo?", choices: ["Alam y Foca", "Machicho y Quiriquiño", "Juansei y Negro Albina", "Malvar y Matute"], answer: "Malvar y Matute" },
        { question: "¿Con qué cortaba el Vodka Gonchi cuando tenía 17 años?", choices: ["Gin", "Coca", "Whisky", "Cerveza"], answer: "Gin" }
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
