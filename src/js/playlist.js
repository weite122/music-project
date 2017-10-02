let Playlist = (function(){
    function _Playlist(){
      this.getSongs()
      this.getPlaylist()
      this.bind()
    }

    _Playlist.prototype.bind = function(){
      $('.introductionText').click(function(){
        $('.introductionText').toggleClass('noactive')
        $('.introductionText').siblings().find('span').toggleClass('active')
      })
    }

    _Playlist.prototype.getSongs = function(){
      let _this = this
      let id = parseInt(location.search.match(/\bid=([^&]*)/)[1],10)
      $.get('../songs.json').then(function(response){
        let items = response
        items.forEach((i)=>{
            let $li = $(`
            <li>
            <a href="./song.html?id=${i.id}">
                <span class="listNumber">${i.id}</span>
                <div class="listInformation">
                <h3>${i.name}</h3>
              <p>
              <svg class="sq">
                <use xlink:href="#icon-SQ"></use>
              </svg>          
              ${i.information}</p>
              </div>
              <svg class="play">
                <use xlink:href="#icon-play-circle"></use>
              </svg>
            </a>
          </li>
                 `)
             $('#lastestMusic').append($li)
        })
     })



    _Playlist.prototype.getPlaylist = function(){
      $.get('../playlist.json').then(function(response){
        let playlists = response
        let playlist = playlists.filter(s=>s.id == id)[0]
        let {image,backgroundImage,title,upImage,upName,label,introduction} = playlist
        _this.initText(title,upName,label,introduction)
        _this.PlaceImage(image,backgroundImage,upImage)
      })
    }
    }


    _Playlist.prototype.PlaceImage = function(image,backgroundImage,upImage){
      let $HeaderImg = $('.HeaderImg')
      let $coverImage = $('<img class="coverImage">')
      let $uploader = $('.uploader')
      let $upImage = $('<img class="upImage">')
      $coverImage[0].src = image
      $HeaderImg.append($coverImage)
      $upImage[0].src = upImage
      $uploader.append($upImage)
      $('.playlistbackground').css("background-image","url("+backgroundImage+")")
    }

    _Playlist.prototype.initText = function (title,upName,label,introduction){
        $('.HeaderInformation > h3').text(title)
        $('.uploaderName').text(upName)      
        let array = label.split(',')
        $( ".tag li" ).each(function(index) {
          $(this).text(array[index])
        });
        this.parseIntroduction(introduction)
    }
    
    _Playlist.prototype.parseIntroduction = function (introduction){
      let array = introduction.split('\n')
      let regex = /^\[(.+)\]$/ 
      array = array.map(function(string,index){            
          let matches = string.match(regex)
          if(matches){
              return {words:matches[1]}
          } 
      })
      let $introductionText = $('.introductionText')
      
      array.map(function(object){
        if(!object){return}
        let $span = $('<span></span><br>')
        $span.text(object.words)
        $introductionText.append($span)
    })
  }
  return {
    init: function () {
        new _Playlist()
    }
}
})()

Playlist.init()
// module.exports = Playlist