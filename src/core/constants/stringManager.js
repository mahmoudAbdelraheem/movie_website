export const StringManager = {
  //! https://api.themoviedb.org/3/movie/popular?api_key=a1f18955374c022f6404ba14b7acd019
  //? api config
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "?api_key=a1f18955374c022f6404ba14b7acd019",
  baseImagesUrl: "https://image.tmdb.org/t/p/w500",
  popularMoviesUrl: "movie/popular",
  //? get movies details by id
  //! https://api.themoviedb.org/3/movie/533535?api_key=a1f18955374c022f6404ba14b7acd019
  movieDetailsUrl: "movie/", // movie/{movie_id}?api_key=a1f18955374c022f6404ba14b7acd019

  
  //? search movies
  //! https://api.themoviedb.org/3/search/movie?api_key=a1f18955374c022f6404ba14b7acd019&query=matrix
  movieSearchUrl: "search/movie",

  //? api routes
  loginPage: "/login",
  homePage: "/home",
  movieDetailsPage: "/movieDetails",
  searchPage: "/search",
  favoritePage: "/favorite",
  notFound: "/notFound",


  home:{en:'Home' , ar:'الرئيسية'},
  search:{en:'Search' , ar:'بحث'},
  favorite:{en:'Favorite' , ar:'المفضلة'},
  showDetails:{en:'Show Details' , ar:'عرض التفاصيل'},
  changeLanguage:{en:'Change Language' , ar:'تغيير اللغة'},
  next:{en:'Next' , ar:'التالي'},
  prefvious:{en:'Prefvious' , ar:'السابق'},
};