



document.addEventListener("DOMContentLoaded", function() {
   document.getElementsByClassName('button')[0].onclick= function() {
      chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
        //only run on genius.com
          if (tabs[0].url.includes('genius.com')) {
              console.log(tabs[0].url);
              var progress = document.getElementsByClassName('unified_player-progress_counter')
              console.log(progress.text)


            }

            chrome.tabs.executeScript(null,{file: "content_script.js"})
      // chrome.tabs.executeScript({
      //   code: "var progress = document.getElementsByClassName('unified_player-progress')[0] || 'undefined'\n" +
      //         "var width = 0 \n" +
      //         "console.log('back to this') \n" +
      //         "debugger \n" +
      //       "  var playSong = function(i) { \n" +
      //       "      chrome.extension.i = i \n" +
      //       "    if (i < document.getElementsByClassName('collection_list secondary_list')[0].getElementsByTagName('li').length){ \n" +
      //
      //       "  if(progress !== 'undefined'){ \n" +
      //       "    document.getElementsByClassName('unified_player-play_pause')[0].click()\n" +
      //       "  } \n" +
      //
      //       "  var endOfSong = setInterval(function() {\n" +
      //
      //       "   if(progress !== 'undefined'){ \n" +
      //       "       width = parseInt(progress.style.width)\n" +
      //       "  } \n" +
      //
      //       "    if (width === 0 || progress === 'undefined') {\n" +
      //       "      i ++;\n" +
      //       " debugger \n" +
      //       "      chrome.extension.i ++ \n" +
      //       "      document.getElementsByClassName('collection_list secondary_list')[0].getElementsByTagName('li')[i].getElementsByTagName('a')[0].click();\n" +
      //       "      playSong(chrome.extension.i);\n" +
      //       "      clearInterval(endOfSong);\n" +
      //       "    }\n" +
      //       "  }, 500)\n" +
      //   "    } //end if\n" +
      //   "  } //end playSong\n" +
      //
      //   "      chrome.extension.i = 0 \n" +
      //   "  playSong(0);"
      // })

//comm
        //var songs = document.getElementsByClassName('collection_list secondary_list')[0].getElementsByTagName('li')


// var playSong = function(i)
// document.getElementsByClassName('unified_player-play_pause')[0].click()
// var endOfSong = setInterval(function() {
//      width = parseInt(progress.style.width)
//   if (width === 100) {
//     i ++;
//     document.getElementsByClassName('collection_list secondary_list')[0].getElementsByTagName('li')[i].click();
//     playSong(i);
//     clearInterval(endOfSong);
//   }
// }, 500)





      });
    //  var d = document;
    // var bar =  d.getElementsByClassName('unified_player-progress')[0];
    // bar.style.color = "red";


  }
  // console.log('hello')
  // document.addEventListener("click", function() {console.log('wow')});
})
