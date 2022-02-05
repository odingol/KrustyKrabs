$(document).ready(function(){
    var key = 'AIzaSyDDpZMZUCFcq_DO15MPTzU4WIUs1MK8vl8';
    var videoId = 'W77ZN_hVEE8';
    var URL = 'https://www.googleapis.com/youtube/v3/videos';
    var Options = {
        part: 'snippet',
        key: key,
        maxResults:1,
        videoId:videoId
    
    }
    bringVideo();
    function bringVideo(){
        $.getJSON(URL, Options, function(data){
        // console.log(data)
        var id = data.items[0].snippet.ressourceId.videoId;
        mainVid(id);
    
        })
    }
    function mainVid() {
        $('video').html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/{id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    
    }
    
    
    
    });