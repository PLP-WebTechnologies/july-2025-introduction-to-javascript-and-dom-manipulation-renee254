// ========== Part 1: Basics ==========
function checkBook() {
  let pages = Number(document.getElementById("pages").value);
  let msg = pages >= 300 ? "📖 Long book!" : "📘 Short book!";
  document.getElementById("bookMsg").textContent = msg;
}

// ========== Part 2: Functions ==========
function favBook(title) {
  return `My favorite book is "${title}".`;
}

function showBook() {
  document.getElementById("favBook").textContent = favBook("The Hobbit");
}

// ========== Part 3: Loops ==========
function listBooks() {
  let books = ["1984", "Dune", "Hamlet"];
  let list = document.getElementById("bookList");
  list.innerHTML = "";
  for (let b of books) {
    let li = document.createElement("li");
    li.textContent = b;
    list.appendChild(li);
  }
}

// ========== Part 4: DOM ==========
function toggleTheme() {
  document.body.classList.toggle("dark");
}

function addBook() {
  let ul = document.getElementById("dynamicBooks");
  let li = document.createElement("li");
  li.textContent = "New Book " + (ul.children.length + 1);
  ul.appendChild(li);
}

// Extra DOM interaction: key event
document.addEventListener("keydown", e => {
  if (e.key === "b") alert("📚 Book shortcut pressed!");
});
