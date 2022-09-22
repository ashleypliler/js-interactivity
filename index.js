document.querySelector('form').addEventListener('submit', addMovie);
const message = document.querySelector('#message')

const addMovie = (event) => {
    event.preventDefault()
    let inputFeild = document.querySelector('input');

    const movie = document.createElement('li');

    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputFeild.value;
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn);

    document.querySelector('ul').appendChild(movie);
    
    inputFeild.value = '';
}


const deleteMovie = (event) => {

    message.textContent = "Movie deleted!"
    revealMessage()
    event.target.parentNode.remove();
}

const crossOffMovie = (event) => {
    const checked = event.target.classList.toggle('checked');
    
    if(event.target.classList.contains('checked')){
        message.textContent = 'Movie watched!';
    } else {
        message.textContent = 'Movie added back!';
    }
    revealMessage()
}

function revealMessage() {
    // message.classList.remove('hide')
    
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}

