$(function(){
    function jia(){ $.get("http://192.168.31.110:3000/play/hot",function(res){
         console.log(res);
         for(var i=0;i<res.length;i++){
             for(var j=0;j<res[i].length;j++){
                 $('.warp_').append(` 
                     <div class = "re">
                         <img src="${res[i][j].img}"></img>
                         <div class="re1">${res[i][j].text}</div>
                         <div class="re2"><span>${res[i][j].price}</span></div>
                         <div class="re3">
                         <img src="./../img/img/xin.png""></img><span>${res[i][j].like}</span>
                         <img src="./../img/img/reply.png"></img><span>${res[i][j].words}</span></div>
                     </div>
                    
             `)
         }    
         }
     })
 }
 jia();
 $('.warp_jia span').click(function(){ $('.warp_jia img').attr('src','./../img/img/loading-icon.gif')    
 setTimeout(function(){
    jia()
     // $('.warp_').css('height','1108px')
     $('.warp_jia img').attr('src','./../img/img/more.png')  
 },1000)
   
})
 })