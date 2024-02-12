const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35643945-433c06e40cd86730ec72beccd';

const imageFinder = (search, images) => {
    return fetch(`${BASE_URL}?q=${search}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => res.json())
    .then(data => {
        const newImages = [...images, ...data.hits];
        const hasMoreImages = data.hits.length >= 12;
  
        return {
          images: newImages,
          loading: false,
          showLoadMoreButton: hasMoreImages,
        };
    })
    .catch(error => {
        console.log('Error fetching data:', error);
        return {
          loading: false,
        };
      });
}

export default imageFinder;