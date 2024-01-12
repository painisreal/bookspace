// !----function to use "+" plus button-------
var pop = document.getElementById("popup-bg");
function open_add() {
  pop.style.display = "block";
}
function close() {
  pop.style.display = "none";
}
function del(event){
 event.target.parentElement.remove()
}
// !-------------details-----------
var bookcont = document.getElementById("body");
var bookname = document.getElementById("book-name");
var bookauthor = document.getElementById("book-author");
var describe = document.getElementById("txtarea");
var addthebook = document.getElementById("add-book");

addthebook.addEventListener("click", function (event) {
  event.preventDefault();
  var divi = document.createElement("div");
  divi.setAttribute("id", "book-info");
  divi.innerHTML = `<h2>${bookname.value}</h2> <h3>${bookauthor.value}</h3> <p>${describe.value}</p> <button id="book-del" onclick="del(event)">DELETE</button>`;
  bookcont.append(divi);
  pop.style.display = "none";
});
