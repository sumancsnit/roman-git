import axios from 'axios';

const GIT_API = 'https://api.github.com/';

const fetchGitProfiles = async (searchText) => {
  const response = await axios.get(`${GIT_API}search/users`, {
    params: {
      q: searchText
    }
  });

  if (response?.status === 200) return response.data;

  throw Error(response?.message);
};

const fetchProfileDetails = async (username) => {
  const response = await axios.get(`${GIT_API}users/${username}`);

  if (response?.status === 200) return response.data;

  throw Error(response?.message);
};

export { fetchGitProfiles, fetchProfileDetails };
