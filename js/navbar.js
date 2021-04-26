const menu = document.getElementById("navpanel");

menu.innerHTML = `<!--BEGIN NavBar -->
<nav class="navbar navbar-expand-lg navbar-light shadow-sm fixed-top">
  <div class="container">
    <a class="navbar-brand" href="/">
      <img src="./images/logo.png" class="logo1" alt="logo"/>
      <img src="./images/Logo2.jpg" class="logo2" alt="DHA"/>
      <img src="./images/Logo3.jpg" class="logo3" alt="DSC"/>
      <img src="./images/Logo4.jpg" class="logo4" alt="CDA"/>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item text-dark">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item text-dark">
          <a class="nav-link" aria-current="page" href="/about.html">About Us</a>
        </li>
        <li class="nav-item text-dark">
          <a class="nav-link" href="/partner.html">Partner With Us</a>
        </li>
        <li class="nav-item text-dark">
          <a class="nav-link" href="/activities.html"
            >Activities</a
          >
        </li>
        <li class="nav-item text-dark">
          <a class="nav-link" href="/about.html#FAQ"
            >FAQ’s</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/challenges.html">Challenges</a>
        </li>
       
        <li class="nav-item text-dark">
          <a class="nav-link" href="/contact.html">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<!-- Banner BEGIN -->`;

const path = window.location.pathname;
const urlHash = window.location.hash;
const navLinks = document.querySelectorAll(".nav-link");
let fullPath = path;

if (urlHash != "") {
  fullPath = path + urlHash;
} else {
  fullPath = path;
}

navLinks.forEach((item) => {
  console.log(item.attributes.href.nodeValue);
  if (item.attributes.href.nodeValue === fullPath) {
    item.classList.add("text-danger", "fw-bold");
  }
});

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    setTimeout(() => {
      document.querySelector("#loader").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
    }, 500);
  }
};
