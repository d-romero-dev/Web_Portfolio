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

