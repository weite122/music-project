
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
    },function(){
        alert('失败')
    })
})


