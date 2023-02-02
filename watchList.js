const movie = document.getElementById("movie")

for (const list in localStorage) {
    const lists = JSON.parse(localStorage[list])
    console.log(lists.Title)
}



    // let movieHtml = `
    // <img id = "movie-img" src=${data.Poster} alt="blade-runner">

    // <div id="desc-container">
    //     <div id="title">
    //         <h2>${data.Title}</h2>
    //         <span id="rating">
    //             <i class="fa-solid fa-star"></i> ${data.imdbRating}</span>
    //     </div>
        
    //     <div id="time-genre-watchList">
    //         <span id="run-time">${data.Runtime}</span>
    //         <span id="genre">${data.Genre}</span>
    //         <div id="watchList">
    //             <button class="remove-btn" id="plus-icon">
    //                 <i class="fa-solid fa-minus"></i>
    //             </button>
    //             Watchlist
    //         </div>
    //     </div>
    // </div>  
    // <p>${data.Plot}</p>
    // <hr />
    // `
    // movie.innerHTML += movieHtml  


// click to get the index of that element
//console.log(document.getElementById("plus-icon"))

// document.querySelectorAll("#plus-icon").forEach((list, index) => {
//     list.addEventListener("click", () => {
//         //console.log(watchListData[index])
        
//         //localStorage.removeItem(splice(index, 1))
    
//     })
// })

// console.log(localStorage.movieData)

