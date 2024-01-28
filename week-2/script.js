const movies = [
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        image: 'https://m.media-amazon.com/images/I/81EBp0vOZZL._AC_SL1329_.jpg',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac leo vel justo auctor cursus.'
    },
    {
        title: 'The Shawshank Redemption',
        image: 'https://m.media-amazon.com/images/I/71715eBi1sL._AC_UF894,1000_QL80_.jpg',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac leo vel justo auctor cursus.'
    },
    {
        title: 'The Dark Knight',
        image: 'https://m.media-amazon.com/images/I/71lEDnyUgpL._AC_SL1500_.jpg',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac leo vel justo auctor cursus.'
    }
];

const movieListContainer = document.getElementById('movie-list');
const movieDescriptionContainer = document.getElementById('movie-description');
const movieTitle = document.getElementById('movie-title');
const movieSummary = document.getElementById('movie-summary');
const addMovieDialog = document.getElementById('add-movie-dialog');

movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card',
        'w-48', 'm-2', 'p-2', 'bg-white', 'rounded-md',
        'shadow-md', 'cursor-pointer', 'transition-transform', 'transform', 'hover:scale-105');
    movieCard.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}"  class="max-w-full h-auto" >
                <h3>${movie.title}</h3>
            `;
    movieCard.addEventListener('click', () => showMovieDescription(movie));
    movieListContainer.appendChild(movieCard);
});

function showMovieDescription(movie) {
    movieTitle.textContent = movie.title;
    movieSummary.textContent = movie.summary;
    movieDescriptionContainer.style.display = 'block';
}

function closeMovieDescription() {
    movieDescriptionContainer.style.display = 'none';
}

function openAddMovieDialog() {
    addMovieDialog.style.display = 'block';
}

function closeAddMovieDialog() {
    addMovieDialog.style.display = 'none';
}

function addNewMovie() {
    const movieTitleInput = document.getElementById('new-movie-title');
    const movieImageInput = document.getElementById('new-movie-image');

    try {
        const title = movieTitleInput.value;
        const image = movieImageInput.value;

        if (title.trim() === '' || image.trim() === '') {
            throw new Error('Title and image cannot be empty.');
        }

        const newMovie = {
            title: title,
            image: image,
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac leo vel justo auctor cursus.'
        };


        movies.push(newMovie);

        movieTitleInput.value = '';
        movieImageInput.value = '';

        updateMoviesList();


    } catch (error) {
        console.error('Error adding new movie:', error.message);
    }
}

function updateMoviesList() {

    const movieListContainer = document.getElementById('movie-list');
    movieListContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card',
            'w-48', 'm-2', 'p-2', 'bg-white', 'rounded-md',
            'shadow-md', 'cursor-pointer', 'transition-transform', 'transform', 'hover:scale-105');
        movieCard.innerHTML = `
                    <img src="${movie.image}" alt="${movie.title}"  class="max-w-full h-auto" >
                    <h3>${movie.title}</h3>
                `;
        movieCard.addEventListener('click', () => showMovieDescription(movie));
        movieListContainer.appendChild(movieCard);
    });

}