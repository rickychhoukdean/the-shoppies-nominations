export const fetchList = async (search) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${search}&type=movie&apikey=3a117c14`
  );

  let movies = await response.json();
  console.log(movies);
  return movies.Search;
};
