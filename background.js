
        var ACTION = false
        var TRACK_NUMBER = 0;

chrome.runtime.onMessage.addListener( function (request, sender, sendResponse) {
  ACTION = true;

  if (request.action === "get_number"){
    console.log('sending number')
    TRACK_NUMBER ++
      sendResponse({number: TRACK_NUMBER})
  } else if (request.action === "advance") {
  console.log('advance script received')
  sendResponse({action: "request received"})
  debugger
  chrome.tabs.update({url: request.url})
  }

})


chrome.webNavigation.onCompleted.addListener(function(details){
  console.log('navigating')
  if (ACTION === true){
  chrome.tabs.executeScript(null, {file: "content_script.js"})
  }
})
