const form = document.getElementById("contactForm");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("contactForm__status");
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((_) => {
      status.innerHTML = "Thanks for your submission!";
      form.reset();
    })
    .catch((_) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);
