$(document).ready(function () {
    check('http://localhost:5000/authorized');
})


function check(url) {
    $.ajax({
        url: url,
        type: "POST",
        dataType: "html",
        headers:{
            'Content-Type':'charset=utf-8',
        },
        data:{
            "empty":'null'
        },
        success : function (response) {
            result = $.parseJSON(response);
            console.log(result)
            if(result.status==='success') {
                $('.signin').remove()
                $('header').append(`<h3>Вы вошли как ${result['user']}</h3>
                    <a href="/rooms">Перейти на страницу с комнатами</a><br>
                    <a href="" onclick="logout()">Выйти</a>
`)
            }
        },
        error: function(response) { // Данные не отправлены
            console.log('Ошибка. Данные не отправлены.');
    	}

    })
}

function logout(){
    $.ajax({
        url: '/logout',
        type: "POST",
        dataType: "html",
        data: {"empty":'null'},
        headers:{
            'Content-Type':'charset=utf-8',
        },
        success : function (response) {
            console.log(response)
        },
        error: function(response) { // Данные не отправлены
            console.log(response)
    	}
    })
}