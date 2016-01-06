document.addEventListener("DOMContentLoaded", function() {
   document.getElementsByClassName('button')[0].onclick= function() {
      chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {

if (tabs[0].url.includes('genius.com')) {
  console.log("I am the background page")
}

chrome.tabs.executeScript({
  code: "var progress = document.getElementsByClassName('unified_player-progress')[0] || 'undefined'\n" +
        "var width = 0 \n" +
        "console.log('back to this') \n" +
        "debugger \n" +
      "  var playSong = function(i) { \n" +
      "      chrome.extension.i = i \n" +
      "    if (i < document.getElementsByClassName('collection_list secondary_list')[0].getElementsByTagName('li').length){ \n" +

      "  if(progress !== 'undefined'){ \n" +
      "    document.getElementsByClassName('unified_player-play_pause')[0].click()\n" +
      "  } \n" +

      "  var endOfSong = setInterval(function() {\n" +

      "   if(progress !== 'undefined'){ \n" +
      "       width = parseInt(progress.style.width)\n" +
      "  } \n" +

      "    if (width === 0 || progress === 'undefined') {\n" +
      "      i ++;\n" +
      " debugger \n" +
      "      chrome.extension.i ++ \n" +
      "      document.getElementsByClassName('collection_list secondary_list')[0].getElementsByTagName('li')[i].getElementsByTagName('a')[0].click();\n" +
      "      playSong(chrome.extension.i);\n" +
      "      clearInterval(endOfSong);\n" +
      "    }\n" +
      "  }, 500)\n" +
  "    } //end if\n" +
  "  } //end playSong\n" +

  "      chrome.extension.i = 0 \n" +
  "  playSong(0);"
})



        })
    }
})
