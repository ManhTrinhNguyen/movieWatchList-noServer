const movie = document.getElementById("movie")
const localStorageMovieData = localStorage.getItem("movieData")
const dataMovie = JSON.parse(localStorageMovieData)


    dataMovie.map((data, index) => {
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
    
  
// click to get the index of that element

document.querySelectorAll(".plus-icon").forEach((list, index) => {
    list.addEventListener("click", () => {
        dataMovie.splice(index, 1)
        
        localStorage.setItem("movieData", JSON.stringify(dataMovie))

        // Reload page 
        location.reload()
    })
})










   


