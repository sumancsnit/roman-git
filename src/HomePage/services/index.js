import axios from 'axios';

const GIT_API = 'https://api.github.com/';

const fetchGitProfiles = async (searchText) => {
  const response = await axios.get(`${GIT_API}search/users`, {
    params: {
      q: searchText
    }
  });

  console.log(response);

  if (response?.status === 200) {
    const payLoad = response.data.items.map((row) => ({
      ...row,
      score: Math.round(row.score)
    }));
    return payLoad;
  }
  throw Error(response?.message);
};

export { fetchGitProfiles };
