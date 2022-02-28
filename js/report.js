$(function(){
    function jia(){
        $.get("http://192.168.31.110:3000/report/new",
        function(res){
            for(var i=0;i<res.length;i++){
                $('.left').append(`
            <div class="li">
                <img src="${res[i].img}" alt="">
                <p>${res[i].text}</p>
                <div>
                    <div class="tou">
                        <img src="./../img/img/tx.jpg" alt="">
                        <span>苏苏</span>  2016-01-25
                        <div>
                            <img src="./../img/img/zan.png" alt="">3
                            <img src="./../img/img/reply.png" alt="">3
                        </div>
                    </div>
                </div>
            </div>
            <div class="xia">
                关于格林威特空气净化器还有 4 篇报告，点击查看
            </div>
                `)
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