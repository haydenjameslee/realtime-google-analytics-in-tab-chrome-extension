$(document).ready(function(){
    setInterval(function () {
        if ($('#ID-overviewCounterValue').length) {
            var count = $('#ID-overviewCounterValue').text();
            $('title').text(count + ' - Google Analytics');
        }
    }, 1000);
});