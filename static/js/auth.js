$(document).ready(function () {
    $("#btn").click(
        function (){

            sendAjaxForm('result_form','auth_form','/login');
            return false
        }
    )

})

function sendAjaxForm(result_form,ajax_form,url) {
    $.ajax({
        url: url,
        type: "POST",
        dataType: "html",
        data: getMD5Hash('#'+ajax_form),
        headers:{
            'Content-Type':'charset=utf-8',
        },
        success : function (response) {
            console.log(response)
            result = $.parseJSON(response);
            if (result.status==='success') {
                $('#result_form').html('Вы авторизованы')
                window.location.href = '/'
            }
            else
                $('#result_form').html('Неверные данные или пользователь не существует')
        },
        error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправлены.');
    	}
    })

}


function getMD5Hash(selector){
    let auth = $(selector).serialize()
    const pass = CryptoJS.MD5(auth.split('&')[1].split('=')[1])
    return auth.split('&')[0] + '&password=' + pass.toString()
}

function checkIfWrongSymbols(context) {
        if (['&','=','"',"'",':'].indexOf(context.value[context.value.length-1])+1){
            context.value = context.value.slice(0,context.value.length-1)
            }
    }