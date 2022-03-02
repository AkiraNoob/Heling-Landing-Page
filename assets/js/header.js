//active navbar

const header = () => {
  const home = document.querySelector("#navbar-home");
  const projects = document.querySelector("#navbar-projects");
  const designers = document.querySelector("#navbar-designers");
  const articles = document.querySelector("#navbar-articles");

  const home_dot = document.querySelector("#dot-home");
  const projects_dot = document.querySelector("#dot-projects");
  const designers_dot = document.querySelector("#dot-designers");
  const articles_dot = document.querySelector("#dot-articles");

  home_dot.classList.add("dot-active");
  home.classList.add("text-active");
  projects_dot.classList.remove("dot-active");
  projects.classList.remove("text-active");
  designers_dot.classList.remove("dot-active");
  designers.classList.remove("text-active");
  articles_dot.classList.remove("dot-active");
  articles.classList.remove("text-active");

  home.addEventListener("click", () => {
    home_dot.classList.add("dot-active");
    home.classList.add("text-active");
    projects_dot.classList.remove("dot-active");
    projects.classList.remove("text-active");
    designers_dot.classList.remove("dot-active");
    designers.classList.remove("text-active");
    articles_dot.classList.remove("dot-active");
    articles.classList.remove("text-active");
  });

  projects.addEventListener("click", () => {
    home_dot.classList.remove("dot-active");
    home.classList.remove("text-active");
    projects_dot.classList.add("dot-active");
    projects.classList.add("text-active");
    designers_dot.classList.remove("dot-active");
    designers.classList.remove("text-active");
    articles_dot.classList.remove("dot-active");
    articles.classList.remove("text-active");
  });

  designers.addEventListener("click", () => {
    home_dot.classList.remove("dot-active");
    home.classList.remove("text-active");
    projects_dot.classList.remove("dot-active");
    projects.classList.remove("text-active");
    designers_dot.classList.add("dot-active");
    designers.classList.add("text-active");
    articles_dot.classList.remove("dot-active");
    articles.classList.remove("text-active");
  });

  articles.addEventListener("click", () => {
    home_dot.classList.remove("dot-active");
    home.classList.remove("text-active");
    projects_dot.classList.remove("dot-active");
    projects.classList.remove("text-active");
    designers_dot.classList.remove("dot-active");
    designers.classList.remove("text-active");
    articles_dot.classList.add("dot-active");
    articles.classList.add("text-active");
  });
};

export default header;
