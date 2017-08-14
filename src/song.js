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
        // console.log(array)
        let $lyric = $('.lyric')
        array.map(function(object){
            if(!object){return}
            let $p = $('<p/>')
            $p.attr('data-time',object.time).text(object.words)
            $p.appendTo($lyric.children('.lines'))
        })
    })

    let audio = document.createElement('audio')
    audio.src = "http://dl.stream.qqmusic.qq.com/C400001W4LsO0FHzS6.m4a?vkey=86F51F626E69FB4C19A767CB38CDFC11A8D17DCAE203E4B4DF4C0CAD1A1710F03130DCA30B6514B3AF6464D4E2C52951F1F3EDB89A592A60&guid=1803739836&uin=949193531&fromtag=66"
    audio.oncanplay = function(){
        audio.play()
        $('.disc-container').addClass('playing')
    }
    $('.icon-pause').on('click',function(){
        audio.pause()
        $('.disc-container').removeClass('playing')
    })
    $('.icon-play').on('click',function(){
        audio.play()
        $('.disc-container').addClass('playing')
    })
})