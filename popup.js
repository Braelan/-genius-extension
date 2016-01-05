

var percent = function() {
  var $bar = $('.unified_player-progress')
console.log($bar.css());
}

var hey = function() { alert("hey")};

document.addEventListener("DOMContentLoaded", function() {
   document.getElementsByClassName('button')[0].onclick= function() {
      chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
        //only run on genius.com
          if (tabs[0].url.includes('genius.com')) {
              console.log(tabs[0].url);
              var progress = document.getElementsByClassName('unified_player-progress_counter')
              console.log(progress.text)


            }

      chrome.tabs.executeScript({
        code: "var progress = document.getElementsByClassName('unified_player-progress')[0] \n" +
              "var width = 0 \n" +
              "console.log('back to this') \n" +
              "debugger \n" +

              "var endOfSong = setInterval(function() { \n" +
                " width = parseInt(progress.style.width) \n" +
                "if (width === 100) { \n" +
                  "console.log('song done') \n" +
                  "clearInterval(endOfSong) \n" +
                "} \n" +
              "}, 500) \n" +
    
              "debugger"

      })

        //








      });
    //  var d = document;
    // var bar =  d.getElementsByClassName('unified_player-progress')[0];
    // bar.style.color = "red";


  }
  // console.log('hello')
  // document.addEventListener("click", function() {console.log('wow')});
})
