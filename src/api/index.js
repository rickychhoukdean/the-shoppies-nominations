export const fetchList = async (search, page) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${search}&page=${page}&type=movie&apikey=3a117c14`
  );
  let movies = await response.json();
  return movies.Response === "True" ? movies.Search : [];
};
