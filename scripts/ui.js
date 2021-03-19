var video = document.getElementById("backgroundVideo");
var questionButton = document.getElementById("questionButton");
var testButton = document.getElementById("testButton");
var questionaryButton = document.getElementById("questionaryButton");

var testsJson = [
            {
                question : "Вжарить по коленке",
                file : "videos/tests/0.mov"
            }
            ];

var questionsJson = [
            {
                question : "Добрый день! Как Вас зовут?",
                file : "videos/questions/1.mov",
                answer : "Меня зовут Джон Смит"
            },
            {
                question : "Сколько Вам лет?",
                file : "videos/questions/2.mov",
                answer : "52 года"
            },
            {
                question : "Какой ваш рост?",
                file : "videos/questions/3.mov",
                answer : "172 см"
            }
            ];

function createQuestionsList() {
     questionsJson.forEach(function(item) {
           var element = document.createElement("button");
           element.innerText = item.question;
           element.onclick = function() {
             openVideo(item.file);
           };
           var list = document.getElementById("questionsList");
           list.appendChild(element);
     });
}

function createTestsList() {
    testsJson.forEach(function(item) {
        var element = document.createElement("button");
        element.innerText = item.question;
        element.onclick = function() {
            openVideo(item.file);
       };
       var list = document.getElementById("testsList");
       list.appendChild(element);
    });
}

function openVideo(videoName) {
    //var video = document.getElementById("backgroundVideo");
    //var sources = video.getElementsByTagName('source');
    //sources[0].src = videoName;
    //video.load();
}

function openQuestions() {
    var questionsList = document.getElementById("questionsList");
    if (questionsList.style.display === "none") {
        questionsList.style.display = "block";
    } else {
        questionsList.style.display = "none";
    }
    var testsList = document.getElementById("testsList");
    testsList.style.display = "none";
    var result = document.getElementById("result");
    result.style.display = "none";
    var questionary = document.getElementById("questionary");
    questionary.style.display = "none";

    firstCallback();
}

function openTests() {
    var testsList = document.getElementById("testsList");
    if (testsList.style.display === "none") {
        testsList.style.display = "block";
    } else {
        testsList.style.display = "none";
    }
    var questionsList = document.getElementById("questionsList");
    questionsList.style.display = "none";
    var result = document.getElementById("result");
    result.style.display = "none";
    var questionary = document.getElementById("questionary");
    questionary.style.display = "none";
}

function openQuestionary() {
    var questionary = document.getElementById("questionary");
    questionary.innerHTML = "<img src='images/01.png' width=600>";
    if (questionary.style.display === "none") {
        questionary.style.display = "block";
    } else {
        questionary.style.display = "none";
    }
    var testsList = document.getElementById("testsList");
    testsList.style.display = "none";
    var result = document.getElementById("result");
    result.style.display = "none";
    var questionsList = document.getElementById("questionsList");
    questionsList.style.display = "none";
}

function openAnswerDialog() {
    var text;
    var favDrink = prompt("Какой диагноз?", "");
    switch(favDrink) {
        case "простуда":
            text = "Молодец! :)";
            break;
        default:
            text = "Пациент скончался :)";
            break;
    }
    var result = document.getElementById("result");
    result.style.display = "block";
    result.innerHTML = text;
    var testsList = document.getElementById("testsList");
    testsList.style.display = "none";
    var questionsList = document.getElementById("questionsList");
    questionsList.style.display = "none";
    var questionary = document.getElementById("questionary");
    questionary.style.display = "none";
}

createQuestionsList();
createTestsList();
