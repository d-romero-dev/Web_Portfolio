const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


// Event Listener to control showing of LinkedIn and GitHub Contact Cards: 
// If GitHub button is pressed: Linkedin Card hides.
// IF Linkedin button is pressed: GitHub Card hides.

document.addEventListener('DOMContentLoaded', function () {
  let LinkedinButton = document.getElementById("btn-linkedin");
  let GitHubButton = document.getElementById("btn-github");
  let LinkedinCollapse = new bootstrap.Collapse(document.getElementById("multiCollapseExample1"), { toggle: false });
  let GitHubCollapse = new bootstrap.Collapse(document.getElementById("multiCollapseExample2"), { toggle: false });

  GitHubButton.addEventListener("click", () => {
    if (LinkedinCollapse._element.classList.contains('show')) {
      LinkedinCollapse.hide();
    }
    GitHubCollapse.toggle();
  });

  LinkedinButton.addEventListener("click", () => {
    if (GitHubCollapse._element.classList.contains('show')) {
      GitHubCollapse.hide();
    }
    LinkedinCollapse.toggle();
  });
});


//Event Listener to handle automated nav bar closing:
// Used primarly on devices with sm-screens.

// Adds a click event to each nav bar link.
// Upon clicking a link, it checks if the navigation bar is open.
// If so, simulates a click on the navigation bar button to close it.

document.addEventListener('DOMContentLoaded', function () {
  //Obtaining all link (<a>) elements inside the nav bar:
  let navLinks = document.querySelectorAll('.navbar-nav a');

  //Add a 'click' event to every <a> element:
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      //Automated nav bar closing when clicking in an <a> element:
      let navbarToggler = document.querySelector('.navbar-toggler');
      let navbarCollapse = document.querySelector('.navbar-collapse');

      //Verify if the nav bar is open before trying to close it:
      if (navbarToggler && navbarCollapse.classList.contains('show')) {
        navbarToggler.click(); 
      }
    });
  });
});

