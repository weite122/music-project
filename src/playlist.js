$('.introductionText').click(function(){
    $('.introductionText').toggleClass('noactive')
    $('.introductionText').siblings().find('span').toggleClass('active')
})