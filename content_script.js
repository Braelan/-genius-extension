console.log('I am the content script')



p1 = new Promise( function(resolve, reject) {chrome.runtime.sendMessage({action: "get_number"}, function (response) {
    track = response.number
    resolve( track)
  })
}
)


var progressBar = parseInt(document.getElementsByClassName('media_control-scubber-handle')[0]) || 'undefined'

var pressPlay = function (progressBar) {

      document.getElementsByTagName('play-pause-button')[0].click()

}

var endOfSong = function ( count) {
        var width = 0;
        var loops = 0
        var done = false
        var progressBar = document.getElementsByClassName('media_control-scubber-handle')[0] || 'undefined'
        var sentRequest = false
      endSong = setInterval(function() {
        loops ++
       if(progressBar !== 'undefined'){
           width = parseInt(progressBar.style.left)
      }

      if (width > 95) {
        done = true
      }

      if ((done || (progressBar === 'undefined' && loops > 20) || (isNaN(width) && loops > 20)) & !sentRequest) {

        sentRequest = true
      var nextSong = document.getElementsByClassName('track_listing track_listing--columns')[0].getElementsByTagName('div')[count].getElementsByTagName('a')[0]
          if (nextSong != "undefined"){
            nextSong.click()
          }
        clearInterval(endSong)
      }
    }, 500)

}


var tryPressPlay = function() {
  var counter = 0;
  check = setInterval(function() {
      counter ++
    var progressBar = document.getElementsByClassName('media_control-scubber-handle')[0] || 'undefined'
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
