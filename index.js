
const form = document.getElementById("form")
const searchBtn = document.getElementById("searchBtn")
const inputSearch = document.getElementById("search")
const movie = document.getElementById("movie")

const apiKey = "d0c08a75"

// Fetch Function

const fetchFunc = () => {
    let data = {
        inputSearch : inputSearch.value
    }

    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${data.inputSearch}`)
    .then(res => res.json())
    .then(data => {
        displayData(data)
        addWatchList(data)
    })
}

// Form Submit

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    fetchFunc()
    inputSearch.value = ""
})


// Display Data 

const displayData = (data) => {

    console.log(data)

    
    let movieHtml = `
    <img id = "movie-img" src=${data.Poster} alt="blade-runner">

    <div id="desc-container">
        <div id="title">
            <h2>${data.Title}</h2>
            <span id="rating">
                <i class="fa-solid fa-star"></i> ${data.imdbRating}</span>
        </div>
        
        <div id="time-genre-watchList">
            <span id="run-time">${data.Runtime}</span>
            <span id="genre">${data.Genre}</span>
            <div id="watchList">
                <button id="plus-icon">
                    <i class="fa-solid fa-plus"></i>
                </button>
                Watchlist
            </div>
        </div>
    </div>  
    <p>${data.Plot}</p>
    <hr />
    ${movie.innerHTML}
    `

    movie.innerHTML = movieHtml
}



// Save LocalStorage function 

// const localStorageMovieData = localStorage.getItem("movieData")
// let movieData;

// if (localStorageMovieData === null) {
//     movieData = []
// }else {
//     movieData = JSON.parse(localStorageMovieData)
// }

const addWatchList = (data) => {
        document.getElementById("plus-icon").addEventListener("click", () => {
            console.log("clicked")
            // movieData.push(data)
            localStorage.setItem(data.Title, JSON.stringify(data))
        }) 
}

//console.log(JSON.parse(localStorageMovieData))

// End of Save LocalStorage
