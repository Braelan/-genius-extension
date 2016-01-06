document.addEventListener("DOMContentLoaded", function() {
   document.getElementsByClassName('button')[0].onclick= function() {
      chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {

        if (tabs[0].url.includes('genius.com')) {
          console.log("I am the background page")
        }

        var TRACK_NUMBER = 0;

//get the element with the progress bar
        var progressBar = function () {
          return document.getElementsByClassName('unified_player-progress')[0] || 'undefined'
        }


// check every .5 ms to see if song is done according to the progressBar
        var endOfSong = function (ProgressBar) {
            return setInterval(function() {
               if(progressBar !== 'undefined'){
                   width = parseInt(progressBar.style.width)
              }

              if (width === 0 || progressBar === 'undefined') {
                i ++;
                document.getElementsByClassName('collection_list secondary_list')[0].getElementsByTagName('li')[i].getElementsByTagName('a')[0].click();
                // playSong();
                // clearInterval(endOfSong);
              }
            }, 500)
        }


//press play if there is a play button
      var pressPlay = function (progressBar) {
          if(progressBar !== 'undefined'){
            document.getElementsByClassName('unified_player-play_pause')[0].click()
          }
      }


        var width = 0


 //watch i
var newSong = function () {
    TRACK_NUMBER ++
    return var playSong = function() {
         var i = TRACK_NUMBER
        if (i < document.getElementsByClassName('collection_list secondary_list')[0].getElementsByTagName('li').length){
            progressB = progressBar()
            pressPlay(progressB)
            endOfSong= endOfSong(ProgressB)
          } //end if
      } //end playSong
}



      chrome.extension.i = 0
  playSong(0);






chrome.tabs.executeScript({
  code: "var progress = document.getElementsByClassName('unified_player-progress')[0] || 'undefined'\n" +

})



        })
    }
})
