document.write(localStorage.stud); // {"name":"John","marks":[3, 4, 5]}
let retStud = JSON.parse(localStorage.getItem("stud"));
document.write(retStud.name + ' ' + retStud.marks); // John3,4,5

function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "Вы нажали на кнопку " +
        localStorage.clickcount + " раз";
    } else {
         document.getElementById("result").innerHTML = "Ваш браузер не поддерживает хранилище данных";
    }
}