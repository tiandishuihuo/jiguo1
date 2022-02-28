$(function () {
  $.get("http://192.168.31.110:3000/useing/public", function (res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].text);
      $(".lun").append(` 
            <div class = "lun1">
                    <img src="${res[i].img}"></img>
                    <div class="lun2">${res[i].text}</div>
                    
                    <div></div>
            </div>
            `);
      if (res[i].info_ty == "体验师转享") {
        $(".lun").find(".lun1").eq(i).append(`
                <div class="lun8"><span>${res[i].totalnum}</span><span>${res[i].num}台</span></div>
                <div class="lun4"><span>${res[i].apply}</span>申请</div>
                <div class="lun6">体验师转享</div>
                <div class="lun9">查看试用名单</div>
                `);
      } else {
        $(".lun").find(".lun1").eq(i).append(`
                 
                 <div class="lun3"><span>${res[i].totalnum}</span><span>${res[i].num}台</span></div>
                 <div class="lun4"><span>${res[i].apply}</span>申请</div>
                 <div class="lun5">首发</div>
                 <div class="lun7">剩余时间2天</div> `);
      }
    }
  })
  console.log($(".lun").scrollLeft(  ));
});
