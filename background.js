// document.addEventListener("DOMContentLoaded", function() {
//    document.getElementsByClassName('button')[0].onclick= function() {
//       chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
//
//         if (tabs[0].url.includes('genius.com')) {
//           console.log("I am the background page")
//         }
//
        var TRACK_NUMBER = 0;
//
chrome.runtime.onMessage.addListener( function (request, sender, sendResponse) {
  TRACK_NUMBER ++
  if (request.action === "get_number"){
    console.log('sending number')
      sendResponse({number: TRACK_NUMBER})
  } else if (request.action === "advance") {
    setTimeout(function() {
      console.log('advance script received')
      // chrome.tabs.executeScript(null, {file: "content_script.js"})

    }, 2000)

  }
})
//
//
// // check every .5 ms to see if song is done according to the progressBar
//         var endOfSong = function (ProgressBar) {
//             return setInterval(function() {
//                if(progressBar !== 'undefined'){
//                    width = parseInt(progressBar.style.width)
//               }
//
//               if (width === 0 || progressBar === 'undefined') {
//                 i ++;
//                 document.getElementsByClassName('collection_list secondary_list')[0].getElementsByTagName('li')[i].getElementsByTagName('a')[0].click();
//                 // playSong();
//                 // clearInterval(endOfSong);
//               }
//             }, 500)
//         }
//
//

//
//
//         var width = 0
//
//
//  //watch i
// var newSong = function () {
//     TRACK_NUMBER ++
//     return var playSong = function() {
//          var i = TRACK_NUMBER
//         if (i < document.getElementsByClassName('collection_list secondary_list')[0].getElementsByTagName('li').length){
//             progressB = progressBar()
//             pressPlay(progressB)
//             endOfSong= endOfSong(ProgressB)
//           } //end if
//       } //end playSong
// }
//
//
//
//       chrome.extension.i = 0
//   playSong(0);
//
//
//
//
//
//
// chrome.tabs.executeScript({
//   code: "var progress = document.getElementsByClassName('unified_player-progress')[0] || 'undefined'\n" +
//
// })
//
//
//
//         })
//     }
// })
