$(function(){
    $.get("http://192.168.31.110:3000/play/category",function(res){
    
    var val =Object.values(res)
    // 获取键值
    var num =Object.keys(res)

    for(var i=0;i<num.length;i++){
        $('.warp_').append(`
        <div class="warp_con">
            <div class="warp_title">
                <div class="fang"></div>  
                <div class="num">${num[i]}</div>
              </div>  
              <div class="top"></div>
                <div class="bott"></div>
        </div>
        `)
        
        for(var j=0;j<val[i].length;j++){
            if(val[i][j].icon!=undefined){
                $('.warp_con').eq(i).find('.top').append(`
                <div class="warp_con1">
                    <img src="${val[i][j].icon}" alt="">
                    <p>${val[i][j].productName}(${val[i][j].nums})</p>
                </div>
                `)
            }else{
                $('.warp_con').eq(i).find('.bott').append(`
                <div class="warp_con2">
                    <p>${val[i][j].productName}(${val[i][j].nums})</p>
                </div>`)
            }
        }  
    }
  
    })
})