!function(t){function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=2)}({2:function(t,n,e){"use strict";var r=function(){function t(){this.getData()}return t.prototype.getData=function(){var t=this,n=parseInt(location.search.match(/\bid=([^&]*)/)[1],10);$.get("./js/songs.json").then(function(e){var r=e,i=r.filter(function(t){return t.id===n})[0],a=i.url,o=i.name,c=i.lyric,s=i.image,p=i.backgroundImage;t.initPlayer.call(void 0,a),t.initText(o,c),t.PlaceImage(s,p)})},t.prototype.PlaceImage=function(t,n){var e=$(".disc-container>.disc"),r=$('<img class="cover">');r[0].src=t,e.append(r),$(".page").css("background-image","url("+n+")")},t.prototype.initText=function(t,n){$(".song-description > h1").text(t),this.parseLyric(n)},t.prototype.initPlayer=function(t){function n(t){return t>=10?t+"":"0"+t}var e=document.createElement("audio");e.src=t,e.oncanplay=function(){e.play(),$(".disc-container").addClass("playing")},$(".icon-pause").on("click",function(){e.pause(),$(".disc-container").removeClass("playing")}),$(".icon-play").on("click",function(){e.play(),$(".disc-container").addClass("playing")}),setInterval(function(){for(var t=e.currentTime,r=~~(t/60),i=t-60*r,a=n(r)+":"+n(i),o=$(".lines > p"),c=void 0,s=0;s<o.length;s++){var p=o.eq(s).attr("data-time"),u=o.eq(s+1).attr("data-time");if(0!==o.eq(s+1).length&&p<a&&u>a){c=o.eq(s);break}}if(c){c.addClass("active").prev().removeClass("active");var l=c.offset().top,f=$(".lines").offset().top,d=l-f;$(".lines").css("transform","translateY(-"+d+"px")}},300)},t.prototype.pad=function(t){return t>=10?t+"":"0"+t},t.prototype.parseLyric=function(t){var n=t.split("\n"),e=/^\[(.+)\](.*)$/;n=n.map(function(t,n){var r=t.match(e);if(r)return{time:r[1],words:r[2]}});var r=$(".lyric");n.map(function(t){if(t){var n=$("<p/>");n.attr("data-time",t.time).text(t.words),n.appendTo(r.children(".lines"))}})},{init:function(){new t}}}();t.exports=r}});