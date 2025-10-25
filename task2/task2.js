// --- JavaScript Form Validation ---
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formMsg.textContent = "All fields are required!";
    formMsg.style.color = "red";
    return;
  }

  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailRegex.test(email)) {
    formMsg.textContent = "Please enter a valid email address.";
    formMsg.style.color = "red";
    return;
  }

  formMsg.textContent = "Form submitted successfully!";
  formMsg.style.color = "green";
  form.reset();
});

// --- Dynamic To-Do List ---
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Remove";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});
