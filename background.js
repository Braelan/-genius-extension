
        var ACTION = false
        var TRACK_NUMBER = 0;

chrome.runtime.onMessage.addListener( function (request, sender, sendResponse) {
  ACTION = true;

  if (request.action === "get_number"){
    console.log('sending number')
    TRACK_NUMBER ++
      sendResponse({number: TRACK_NUMBER})
    }
  if(request.action === "done"){
    console.log("reset to 0")
    TRACK_NUMBER = 0
    sendResponse({number: TRACK_NUMBER})
  }
  //  else if (request.action === "advance") {
  // console.log('advance script received')
  // sendResponse({action: "request received"})
  //
  // chrome.tabs.update({url: request.url})
  // }

})

chrome.tabs.onUpdated.addListener(function(tabId, props){
  if( props.status === "complete"  && ACTION === true){

      chrome.tabs.executeScript(tabId, {file: "content_script.js"})


  }
})
