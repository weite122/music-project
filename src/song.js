$(function(){
    $.get('/lyric.json').then(function(object){
        let {lyric} = object
        let array = lyric.split('\n')
        let regex = /^\[(.+)\](.*)$/ 
        array = array.map(function(string,index){            
            let matches = string.match(regex)
            if(matches){
                return {time: matches[1],words:matches[2]}
            } 
        })
        console.log(array)
        let $lyric = $('.lyric')
        array.map(function(object){
            if(!object){return}
            let $p = $('<p/>')
            $p.attr('data-time',object.time).text(object.words)
            $p.appendTo($lyric.children('.lines'))
        })
    })

    let audio = document.createElement('audio')
    audio.src = "http://m10.music.126.net/20170814150932/68d2e91fba2ec79cffe12307a81bcbfc/ymusic/3971/cb87/4b28/18eab5a47394b8cf0333153e4349b7fa.mp3"
    audio.oncanplay = function(){
        audio.play()
        $('.disc-container').addClass('playing')
    }
})