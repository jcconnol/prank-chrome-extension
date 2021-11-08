function cursorChange(x) {
    var whichSelected = x.selectedIndex;
    document.body.style.cursor = x.options[whichSelected].text;
}