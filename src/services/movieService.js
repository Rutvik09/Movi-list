export const fetchMovies = async (page) => {
    const response = await fetch(`https://test.create.diagnal.com/data/page${page}.json`);
    const data = await response.json();
    return data.page['content-items'].content;
  };