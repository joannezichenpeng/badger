function isMatch(element) {
    var text = element.innerText;
    return ['@michael_nielsen', '@SebastienZany', '@LauraDeming', '@soniajoseph_', '@JoanneZPeng'].includes(text)
}

function addBadge(element) {
    element.classList.add("badged")
}

// turn twitter handles' font green
function badger() {

    // get elements whose inner text starts with "@"
    let xPathResults = document.evaluate("//*[text()[starts-with(.,'@')]]", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

    for (let i = 0; i < xPathResults.snapshotLength; ++i) {
        var element = xPathResults.snapshotItem(i)
        if (isMatch(element)) {
            addBadge(element);
        }
    }
}



var styleElement = document.createElement('style');
document.head.appendChild(styleElement);
var styleSheet = styleElement.sheet;
styleSheet.insertRule(".badged {display: block;}");
styleSheet.insertRule(".badged::after { float: right; margin-left: 3px; content: \" \"; display: block; width: 15px; height: 15px; background-image: url(" + chrome.runtime.getURL("badge.png") + "); background-size: 15px 15px; }");

badger();

// ensures badgers will be badgered
setInterval(function () {
    badger();
}, 100)


