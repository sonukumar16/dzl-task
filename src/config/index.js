const  BASE_URL = 'https://api.github.com';

const Calls =  {
    getAllGistUrl: (username) => {
        return `${BASE_URL}/users/${username}/gists`;
    },
    getSingleGistUrl: (gistId) => {
        return `${BASE_URL}/gists/${gistId}`
    }
}

export default Calls;