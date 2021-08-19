let movie1 = document.querySelector('.movie1')
let movie2 = document.querySelector('.movie2')
let movie3 = document.querySelector('.movie3')
let movie4 = document.querySelector('.movie4')
let movie5 = document.querySelector('.movie5')
let movie6 = document.querySelector('.movie6')
let movie7 = document.querySelector('.movie7')
let movie8 = document.querySelector('.movie8')
let movie9 = document.querySelector('.movie9')

let song1 = document.querySelector('.song1')
let song2 = document.querySelector('.song2')
let song3 = document.querySelector('.song3')
let song4 = document.querySelector('.song4')
let song5 = document.querySelector('.song5')
let song6 = document.querySelector('.song6')
let song7 = document.querySelector('.song7')
let song8 = document.querySelector('.song8')
let song9 = document.querySelector('.song9')

let movieYear = document.querySelector('.movie-year')
let musicYear = document.querySelector('.music-year')

function createList(){
    if (movieClick === 1){
        let moviesStep = `movies${theYear}`
        let moviesYearTop = moviesList[moviesStep]

        if (moviesStep === 'movies'){
            musicPic.style.width = '500px'
            musicPic.style.height = '300px'
            moviePic.style.width = '500px'
            moviePic.style.height = '300px'
            midMain.style.backgroundColor = '#d7e1e3'
            movieExpand.style.display = 'none'
            musicExpand.style.display = 'none'
        }
        
        movieYear.innerText = `Top 9 Movies from: ${theYear}`;
        movie1.innerText = moviesYearTop.movie1
        movie2.innerText = moviesYearTop.movie2
        movie3.innerText = moviesYearTop.movie3
        movie4.innerText = moviesYearTop.movie4
        movie5.innerText = moviesYearTop.movie5
        movie6.innerText = moviesYearTop.movie6
        movie7.innerText = moviesYearTop.movie7
        movie8.innerText = moviesYearTop.movie8
        movie9.innerText = moviesYearTop.movie9

        pullFromList();

        
    }

    if (musicClick === 1){
        let musicStep = `music${theYear}`
        let musicYearTop = musicList[musicStep]

        if (musicStep === 'music'){
            musicPic.style.width = '500px'
            musicPic.style.height = '300px'
            moviePic.style.width = '500px'
            moviePic.style.height = '300px'
            midMain.style.backgroundColor = '#d7e1e3'
            movieExpand.style.display = 'none'
            musicExpand.style.display = 'none'
        }

        musicYear.innerText = `Top 9 Songs from: ${theYear}`;
        song1.innerText = musicYearTop.song1
        song2.innerText = musicYearTop.song2
        song3.innerText = musicYearTop.song3
        song4.innerText = musicYearTop.song4
        song5.innerText = musicYearTop.song5
        song6.innerText = musicYearTop.song6
        song7.innerText = musicYearTop.song7
        song8.innerText = musicYearTop.song8
        song9.innerText = musicYearTop.song9


        pullFromList();

        

    }


}

// function pullFromList(){
//     let listItems = document.querySelectorAll('ol li')
//     listItems.forEach(function(listItem){
//         listItem.addEventListener('click', function(e){

//             console.log('Playlist: ',playList)
//             console.log('Watchlist: ',watchList)


//             if (movieClick === 1){

//                 watchList.push(e.target.innerText)

//             }

//             if (musicClick === 1){
//                 playList.push(e.target.innerText)
//             }
//         })
//     })
// }

function pullFromList(){
    let listItems = document.querySelectorAll('ol li')
      for(item of listItems){
        item.addEventListener('click',function(e){
        if(movieClick === 1){
          watchList.push(e.target.innerText)
  }
      if(musicClick === 1){
          playList.push(e.target.innerText)
  }
  }
  
  )
  
  
  }
 
}

function modalPlayList (){

    playList.forEach((song) =>{
        let li = document.createElement("li")
        li.innerText = song;
        modalContentMusic.appendChild(li);
    })

}

function modalWatchList (){

    watchList.forEach((movie) =>{
        let li = document.createElement("li")
        li.innerText = movie;
        modalContentMovie.appendChild(li);
    })

}