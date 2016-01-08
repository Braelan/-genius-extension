



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


      });

  }

})
