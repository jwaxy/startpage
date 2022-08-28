// Search something on google, if no arguments are provided => www.google.com
g = google;
function google(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
        window.open("https://www.google.com/search?q=" + search, "_self");
    } else {
        window.open("https://www.google.com", "_self");
    }
}

yt = youtube;
function youtube(args) {
    window.open("https://www.youtube.com", "_self");
}

gh = github;
function github(args) {
    window.open("https://www.github.com", "_self");
}

// Display time
time = clock;
function clock(args) {
    var today = new Date();
    block_log(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
}

// Clear the terminal
cls = clear;
function clear(args) {
    document.getElementById('wrapper').innerHTML = "";
}





