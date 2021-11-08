function nicCage(){
    chrome.storage.sync.get(["nicCageToggle"], function(items){
        if(items.nicCageToggle === true){
            //list out all images and replace them with nic cage images
            alert("nic cage");
        }
    });
}