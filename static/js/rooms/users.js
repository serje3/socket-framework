class User{
    #username;
    #status;
    constructor() {
        this.#username;
        this.#status=false
        this.#setUserName()
    }

    get name(){
        return this.#username
    }

    get status(){
        return this.#status
    }

    #setUserName() {
        this.#getServerResponse().done(function (response) {
            this.#username = decodeURI($.parseJSON(response)['user'])
        }.bind(this))
    }

    #getServerResponse(){
        return $.ajax({
        url: 'http://localhost:5000/authorized',
        type: "POST",
        dataType: "html",
        headers:{
            'Content-Type':'charset=utf-8',
        },
        data:{
            "empty":'null'
        },
        })
            .done(function (response) {

                 return response;
        })
            .fail(function (response) {
                alert('Ошибка выполнения скрипта')
                console.log(response)

            })

    }


}


const user = new User()