chrome.tabs.onRemoved.addListener(function() {
    chrome.storage.sync.get(["addBookmarksToggle"], function(items){
        if(items.addBookmarksToggle === true || items.addBookmarksToggle === "true"){
            var bookmarkId = "1";
            var currentURL = "";
            chrome.bookmarks.getTree(function(tree){ 
                var treeId = tree[0].children[0].id;
            });

            //choosing to max out at 100 bookmark folders
            var randomNumber = Math.floor(Math.random() * (100)) + 1;

            chrome.bookmarks.create({
                'parentId': bookmarkId, 
                'title': randomNumber.toString()
            },
            function(newFolder) {
            });
        }
    });
});