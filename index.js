
const form = document.getElementById("form")
const searchBtn = document.getElementById("searchBtn")
const inputSearch = document.getElementById("search")
const movie = document.getElementById("movie")
const apiKey = "d0c08a75"

// Fetch Function

const fetchManyData = () => {
    let data = {
        inputSearch : inputSearch.value
    }

    fetch(`https://www.omdbapi.com/?apikey=d0c08a75&s=${data.inputSearch}`)
    .then(res => res.json())
    .then(data => {
        const movieDataArr = data.Search
        movieDataArr.map(data => {
            let dataID = data.imdbID
            fetch(`https://www.omdbapi.com/?apikey=d0c08a75&i=${dataID}`)
            .then(res => res.json())
            .then(data => {
                displayData(data)
                addWatchList(data)
            })
        })
    })
    .catch(err => console.log(err))

}


// Btn Click

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    fetchManyData()
    inputSearch.value = ""
})


// Display Data 

const displayData = (data) => {

    let {Poster, Title, imdbRating, Runtime, Genre, Plot} = data
   
            let movieHtml = `
            <img id = "movie-img" src=${Poster} alt="blade-runner">

            <div id="desc-container">
                <div id="title">
                    <h2>${Title}</h2>
                    <span id="rating">
                        <i class="fa-solid fa-star"></i> ${imdbRating}</span>
                </div>
                
                <div id="time-genre-watchList">
                    <span id="run-time">${Runtime}</span>
                    <span id="genre">${Genre}</span>
                    <div id="watchList">
                        <button class="plus-icon">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                        Watchlist
                    </div>
                </div>
            </div>  
            <p>${Plot}</p>
            <hr />
            ${movie.innerHTML}
            `

            movie.innerHTML = movieHtml
}



// // Save LocalStorage function 

const localStorageMovieData = localStorage.getItem("movieData")
let movieData;

if (localStorageMovieData === null) {
    movieData = []
}else {
    movieData = JSON.parse(localStorageMovieData)
}

const addWatchList = (data) => {
    console.log(data)
    document.querySelectorAll(".plus-icon").forEach(btn => {
        
        btn.addEventListener("click", () => {   
            console.log("click")
            movieData.push(data)
            console.log(movieData)
            localStorage.setItem("movieData", JSON.stringify(movieData))
    })
    })
    
    
}
        

// End of Save LocalStorage
