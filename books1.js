function loadBooks() {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "books1.json", true);
    xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState != 4) return;
      if (xhttp.status != 200) {
        alert(xhttp.status + ": " + xhr.statusText);
      } else {
        let books = JSON.parse(xhttp.responseText);
        insertBooks(books);
      }
    };
  }
  
  function insertBooks(books) {
    let str = `<div class="wrap">`;
    for (let i = 0; i < books.length; i++) {
      str += `<div class="bookWrap">`;
      str += `<p>${books[i].category}</p>`;
      str += `<div class="image"><img src="${books[i].imageCover}" /></div>`;
      str += `<h2>${books[i].name}</h2>`;
      str += `<p>${books[i].author}</p>`;
      str += `<p>${books[i].price}</p>`;
      str += `</div>`;
    }
  
    str += `</div>`;
    document.getElementById("books").innerHTML = str;
  }