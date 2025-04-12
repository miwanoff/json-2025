// let tomorrow = new Date();
// tomorrow.setDate(new Date().getDate() - 1);

// document.cookie = "user=Joan; path=/; expires=" + tomorrow.toUTCString();

let objStud = { "name": "John", "marks": [3, 4, 5] };
let serStud = JSON.stringify(objStud);// сериализация
localStorage.setItem("stud", serStud); // сохранение в localStorage