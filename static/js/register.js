$(document).ready(function () {
    $("#btn").click(
        function (e){

            sendAjaxForm('result_form','register_form','/register');
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
            result = $.parseJSON(response);
            if (result.status==='success') {
                $('#result_form').html('Вы зарегистрированы')
                window.location.href = '/'
            }
            else if(result.status==='not equal')
                $('#result_form').html('Пароли не совпадают')
            else
                $('#result_form').html('Ошибка авторизации')
        },
        error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправлены.');
    	}
    })

}


function getMD5Hash(selector){
    let auth = $(selector).serialize()
    const pass = CryptoJS.MD5(auth.split('&')[1].split('=')[1])
    const pass2 = CryptoJS.MD5(auth.split('&')[2].split('=')[1])

    return auth.split('&')[0] + '&password=' + pass.toString() + '&password2=' + pass2.toString()
}

function checkIfWrongSymbols(context) {
        if (['&','=','"',"'",':'].indexOf(context.value[context.value.length-1])+1){
            context.value = context.value.slice(0,context.value.length-1)
            }
    }
