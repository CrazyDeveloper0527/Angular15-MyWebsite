export const environment = {
  production: false,
  application:
  {
    name: 'angular-starter',
    angular: 'Angular 15.0.4',
    bootstrap: 'Bootstrap 5.2.3',
    fontawesome: 'Font Awesome 6.2.1',
  },

  constant:
  {
    user_name: "Angular 15",
    user_skill: "Personal Website",
    user_bio0: "This is an dedicated web developer with rich experience.",
    user_bio1: "Full Stack Developer with 7+ years of experience building high-quality websites, applications and databases for reputable brands.",
    user_mask: "./assets/params/images/home/profile.jpg"
  },

  urlNews: './assets/params/json/mock/trailers.json',
  urlMovies: './assets/params/json/mock/movies.json',

  /* urlNews: 'http://localhost:5004/trailers', */
  // url: 'https://api.ganatan.com/tutorials',

  config: {
    /* SELECT ONE OF THOSE CONFIGURATIONS */

    /* LOCAL JSON (NO CRUD) */
    api: false,
    url: './assets/params/json/crud/',

    /* LOCAL REST API CRUD WITH POSTGRESQL */
    /* api: true,
    url: 'http://localhost:5004/', */
  },
};
