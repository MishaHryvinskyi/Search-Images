const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35643945-433c06e40cd86730ec72beccd';

const imageFinder = (search) => {
    return fetch(`${BASE_URL}?q=${search}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
}

export default imageFinder;