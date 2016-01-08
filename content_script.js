console.log('I am the content script')



p1 = new Promise( function(resolve, reject) {chrome.runtime.sendMessage({action: "get_number"}, function (response) {
    track = response.number
    resolve( track)
  })
}
)

// p1.then( function(val) {
//   console.log(val)
// })



var progressBar = document.getElementsByClassName('unified_player-progress')[0] || 'undefined'

var pressPlay = function (progressBar) {

      document.getElementsByClassName('unified_player-play_pause')[0].click()

}

var endOfSong = function ( count) {
        var loops = 0
        var done = false
        var sentRequest = false
      endSong = setInterval(function() {
       if(progressBar !== 'undefined'){
         loops ++
           width = parseInt(progressBar.style.width)
      }
      if (width > 95) {
        done = true
      }
      if ((done || (progressBar === 'undefined' && loops > 30) || (isNaN(width) && loops > 30)) & !sentRequest) {

        sentRequest = true
      document.getElementsByClassName('collection_list secondary_list')[0].getElementsByTagName('li')[count].getElementsByTagName('a')[0].click()
        // chrome.runtime.sendMessage({action: "advance", url: href})
        clearInterval(endSong)
      }
    }, 500)

}


var tryPressPlay = function() {
  var counter = 0;
  check = setInterval(function() {
      counter ++
    var progressBar = document.getElementsByClassName('unified_player-progress')[0] || 'undefined'
    if(progressBar !== 'undefined'){
      pressPlay()
      clearInterval(check)
    }else if (counter > 5) {clearInterval(check)}

  },1000)
}

var playSong = function (){
    tryPressPlay()
    p1.then( function(track_number) {
      console.log(track_number)
    endOfSong( track_number)


    }.bind(this))
}

playSong();
