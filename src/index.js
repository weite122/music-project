
$(function(){
    $.get('./songs.json').then(function(response){
      let items = response
      items.forEach((i)=>{
          let $li = $(`
          <li>
          <a class="icon-play-circle" href="./song.html?id=${i.id}">
            <h3>${i.name}</h3>
            <p>
            <svg class="sq">
              <use xlink:href="#icon-SQ"></use>
            </svg>          
            ${i.information}</p>
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




$('.siteNav').on('click','ol.tabItems> li',function(e){
  let $li = $(e.currentTarget).addClass('active')
  $li.siblings().removeClass('active')
  let index = $li.index()
  $li.trigger('tabChange',index)
  $('.tabContent > li').eq(index).addClass('active')
    .siblings().removeClass('active')
})

$('.siteNav').on('tabChange',function(e,index){
  let $li =  $('.tabContent > li').eq(index)
  if($li.attr('data-downloaded') === 'yes'){
    return
  }
  if(index === 1){
    $.get('./page2.json').then((response)=>{
      $li.text(response.content)
      $li.attr('data-downloaded','yes')
      console.log(response)
    })
  }else if(index === 2){
    $.get('./page3.json').then((response)=>{
      $li.text(response.content)
      $li.attr('data-downloaded','yes')
    })
  }
})


})

