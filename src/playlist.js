$(function(){
    
    $('.introductionText').click(function(){
        $('.introductionText').toggleClass('noactive')
        $('.introductionText').siblings().find('span').toggleClass('active')
    })


    $.get('./songs.json').then(function(response){
        let items = response
        items.forEach((i)=>{
            let $li = $(`
            <li>
            <a  href="./song.html?id=${i.id}">
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
        $('#lastestMusicLoading').remove()
     })
})
