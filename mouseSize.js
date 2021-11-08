function mouseSize(){
    chrome.storage.sync.get(["mouseSizeToggle"], function(items){
        if(items.mouseSizeToggle === true){
            //make mouse bigger and smaller
        }
    })
}