const bookmanage = document.querySelectorAll(".Booksmanage li");

[].forEach.call(bookmanage, function(bookmanage){
  bookmanage.addEventListener("click", click, false);
});

function click(e){
  const inting = "<button class='moreborrow'>연장 신청</button>"
  e.innerHtml = innerHtml+inting;
}