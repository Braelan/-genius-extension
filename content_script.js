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
    if(progressBar !== 'undefined'){
      document.getElementsByClassName('unified_player-play_pause')[0].click()
    }
}

var endOfSong = function ( track_number) {
        var check = -5
    return setInterval(function() {
       if(progressBar !== 'undefined'){
           width = parseInt(progressBar.style.width)
      }

      if (width  > 95 || progressBar === 'undefined' || isNaN(check) === isNaN(width)) {
        console.log('song done')

        // chrome.runtime.sendMessage({action: "advance"})

        document.getElementsByClassName('collection_list secondary_list')[0].getElementsByTagName('li')[track_number].getElementsByTagName('a')[0].click();

        // clearInterval(endOfSong);
      }
      check = width
    }, 500)
}


var playSong = function (){
    pressPlay()
    p1.then( function(track_number) {
      endOfSong( track_number)
    }.bind(this))
}

// playSong();
document.addEventListener("DOMContentLoaded", function() {
chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {

  chrome.permissions.request({
    permissions: ['activeTab'],
    origins: ['http://www.genius.com/*', "https://www.genius.com/*"]
  }, function(granted) {
    if (granted){
      chrome.runtime.sendMessage({action: "advance"})
}else {  console.log('hello')}
})
})
})

chrome.runtime.sendMessage({action: "advance"})
pressPlay()
