$(function(){
    function jia(){$.get("http://192.168.31.110:3000/guid/new",
    function(res){
        for(var  i=0;i<res.length;i++){
            // console.log(res[i]);
            // console.log(res[i].text);
            $('.warp_').append(` 
                     <div class = "re">
                     <div class="re6">
                         <img src="${res[i].img}"></img>
                         <div class="re1">${res[i].text}</div>
                         <div class="re3">
                         <img src="./../img/img/xin.png""></img><span>${res[i].like}</span>
                         <img src="./../img/img/reply.png"></img><span>${res[i].words}</span></div>
                     </div>
                     <div class="re4"></div>
                     <div class="re5"></div>
                     </div>
             `)
        }
    })
} jia();
    $('.warp_jia span').click(function(){ $('.warp_jia img').attr('src','./../img/img/loading-icon.gif')    
    setTimeout(function(){
       jia()
        // $('.warp_').css('height','1108px')
        $('.warp_jia img').attr('src','./../img/img/more.png')  
    },1000)
      
 })
})