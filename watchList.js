const movie = document.getElementById("movie")
const localStorageMovieData = localStorage.getItem("movieData")
const dataMovie = JSON.parse(localStorageMovieData)

// Remove Dublicate Movie 

let newArrDataMovie = []
let newObjDataMovie = {}

for (let data in dataMovie) {
     objTitle = dataMovie[data]["Title"]
    newObjDataMovie[objTitle] = dataMovie[data]
}
console.log(newObjDataMovie)
for (i in newObjDataMovie) {
    newArrDataMovie.push(newObjDataMovie[i])
}

// End of Remove Duplicate Movie

    newArrDataMovie.map((data) => {
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
                    <button class="plus-icon">
                        <i class="fa-solid fa-minus"></i>
                    </button>
                    Watchlist
                </div>
        </div>
    </div>  
    <p>${data.Plot}</p>
    <hr />
    `
    movie.innerHTML += movieHtml  
    })
    
  
// Remove Movie

document.querySelectorAll(".plus-icon").forEach((list, index) => {
    list.addEventListener("click", () => {
        newArrDataMovie.splice(index, 1)
        
        localStorage.setItem("movieData", JSON.stringify(newArrDataMovie))

        // Reload page 
        location.reload()
    })
})










   


