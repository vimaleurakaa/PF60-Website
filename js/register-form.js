function onRegisterFormSubmit() {
  const popupRegisterBody = document.getElementById("popupRegisterBody");
  setTimeout(function () {
    popupRegisterBody.innerHTML = `<p>Thank You! We have received your registration.</p>`;
  }, 1000);
}
