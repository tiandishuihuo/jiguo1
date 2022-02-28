    // var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP')
    // ajax.open('get',' http://192.168.31.110:3000/report/hot',true)
    // ajax.send()
    // ajax.onreadystatechange = function(){
    //     if(ajax.status==200){
    //      var ad =JOSN.parse(ajax.responseText)
    //      console.log(ad);
    //      var html_ =template('mb',{
    //          value: ad,
    //      })
    //      list.innerHTML = html_
    //     }
    // }

    if (window.XMLHttpRequest) {
        var as = new XMLHttpRequest()
    } else {
        var as = new ActiveXObject('Microsoft.XMLHTTP')
    }
    as.open('get', 'http://192.168.31.110:3000/useing/public', true)
    as.send()
    as.onreadystatechange = function () {
        if (as.readyState == 4) {
            if (as.status == 200) {
                var ad = JSON.parse(as.responseText)
                console.log(ad);
                var html_ = template('mb', {
                    value: ad,
                })
                list.innerHTML = html_
            }
        }
    }