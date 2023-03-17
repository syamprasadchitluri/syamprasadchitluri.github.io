let form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  let formData = new FormData(form);
  let nameInput = formData.get("name");
  let emailInput = formData.get("email");
  let namediv = document.getElementById("namediv");
  let emaildiv = document.getElementById("emaildiv");
  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  if (nameInput === "") {
    let errorMessage = document.createElement("div");
    errorMessage.innerText = "Name cannot be empty";
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "20px";
    errorMessage.setAttribute("role", "alert");
    errorMessage.setAttribute("aria-live", "assertive");
    namediv.appendChild(errorMessage);
    event.preventDefault();
  }

  if (nameInput.length > 0 && !nameInput.match(nameRegex)) {
    let errorMessage = document.createElement("div");
    errorMessage.innerText = "Names can contain only alphabets";
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "20px";
    errorMessage.setAttribute("role", "alert");
    errorMessage.setAttribute("aria-live", "assertive");
    namediv.appendChild(errorMessage);
    event.preventDefault();
  }

  if (emailInput === "") {
    let errorMessage = document.createElement("div");
    errorMessage.innerText = "Email cannot be empty";
    errorMessage.style.fontSize = "20px";
    errorMessage.style.color = "red";
    errorMessage.setAttribute("role", "alert");
    errorMessage.setAttribute("aria-live", "assertive");
    emaildiv.appendChild(errorMessage);
    event.preventDefault();
  }

  if (emailInput.length > 0 && !emailInput.match(emailRegex)) {
    let errorMessage = document.createElement("div");
    errorMessage.innerText = "Please enter a valid email address";
    errorMessage.style.fontSize = "20px";
    errorMessage.style.color = "red";
    errorMessage.setAttribute("role", "alert");
    errorMessage.setAttribute("aria-live", "assertive");
    emaildiv.appendChild(errorMessage);
    event.preventDefault();
  }
}
