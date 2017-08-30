
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


   $.get('./songs.json').then(function(response){
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
         $('#hotMusic').append($li)
    })
 })


   $.get('./playlist.json').then(function(response){
    let items = response
    items.forEach((i)=>{
        let $li = $(`
        <li>
        <a href="./playlist.html?id=${i.id}">
        <div>
          <img src="${i.image}"
            alt="">
          <span class="icon-listen">          
                <svg class="listen">
                <use xlink:href="#icon-erji"></use>
              </svg>  
              241万</span>
        </div>

        <p>${i.title}</p>
      </a>
      </li>
             `)
         $('#musicPlaylist').append($li)
    })
 })

// tab切换
$('.siteNav').on('click','ol.tabItems> li',function(e){
  let $li = $(e.currentTarget).addClass('active')
  $li.siblings().removeClass('active')
  let index = $li.index()
  $li.trigger('tabChange',index)
  $('.tabContent > li').eq(index).addClass('active')
    .siblings().removeClass('active')
})

function getDateStr(){
  let today = new Date()
  let year = today.getFullYear()
  let month = today.getMonth()+1
  let day = today.getDate()
  return year+'年'+month+'月'+day+'日'
}

$('.hotTime>span').text(getDateStr())


// 表单输入搜索效果
$('.closebox').click(function(){
  $('#searchSong').val("")
  $('.closebox').hide()
  $('.hotSearch').show()
  $('.searchRecommend').hide()
})
$('#searchSong').on('keyup',function(){
  $('.closebox').show()
  $('.hotSearch').hide()
  $('.searchRecommend').show()
  if($('#searchSong').val() === ""){
    $('.closebox').hide()
  }
})


let timer = undefined
$('input#searchSong').on('input', function(e){
  let $input = $(e.currentTarget)
  let value = $input.val().trim()
  if(value === ''){return}

  if(timer){
    clearTimeout(timer)
  }

  timer = setTimeout(function(){
    search(value).then((result)=>{
      timer = undefined
      if(result.length !== 0){
        $('#output').text(result.map((r)=>r.name).join(','))
        $('#output').empty()
        let $ul = $('<ul></ul>')
        result.forEach((item)=>{
          let $li = $(`<li><a href="/song.html?id=${item.id}">${item.name}</a></li>`)
          $li.appendTo($ul)
        })
        $('#output').append($ul)
      }else{
        $('#output').html('没有结果')
      }
    })
  },300)


})



function search(keyword){
  console.log('搜索'+keyword)
  return new Promise((resolve, reject)=>{
    var database = [
      { "id": 1, "name":"Earned It", },
      { "id": 2, "name":"Faded (Restrung)", },
      { "id": 3, "name":"NEXT TO YOU(Rhodes Version)", },
      { "id": 4, "name":"New Year's Eve", },
      { "id": 5, "name":"No One - Reprise", },
      { "id": 6, "name":"Shape of You", },
      { "id": 7, "name":"Safe And Sound", },
      { "id": 8, "name":"We Don't Talk Anymore", },
      { "id": 9, "name":"call of silience", },
      { "id": 10, "name":"justice-2", }
    ]
    let result = database.filter(function(item){
      return item.name.indexOf(keyword)>=0
    })
    // console.log(result)
    setTimeout(function(){
      console.log('搜到'+keyword+ '的结果')
      resolve(result)
  }, (Math.random()*200 + 1000))
  })
}
window.search = search
})

