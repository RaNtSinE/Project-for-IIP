// using jQuery
async function f() {


function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

}

f();


let saveBtns = $('.sav');
let delBtns = $('.del');
let check = [];


function addPostListeners() {
    saveBtns = $('.sav');
    for (let i = 0; i < saveBtns.length; i++)
    {
        let j = i;

        if(check[i] !== 1)
        {
            check[i] = 1;
            saveBtns[i].addEventListener("click",function () {
                let infoblock = this.parentNode.getElementsByClassName("form-control");
                if (infoblock[2].value !== "-1")
                {
                    $.ajax({
                        type: "POST",
                        url: "/user/edit_block",
                        data: {block_id: infoblock[2].value, name: infoblock[0].value, content: infoblock[1].value }
                    });
                }
                else
                {
                    var request = $.ajax({
                        type: "POST",
                        url: "/user/add_block",
                        dataType: 'json',
                        data: {name: infoblock[0].value, content: infoblock[1].value }
                    });
                    request.done(function(data){
                        infoblock[2].value = data.block_id;
                    })
                }

            });
        }
    }
}

function addDeleteListeners() {
    delBtns = $('.del');
    for (let i = 0; i < delBtns.length; i++)
    {
        let j = i;
        delBtns[i].addEventListener("click",function () {
            let infoblock = this.parentNode.getElementsByClassName("form-control");

            $(this).parent().remove();
            check[j] = 0;

            var request = $.ajax({
                url: "/user/delete_block",
                type: "POST",
                data: {block_id : infoblock[2].value}
            });
            request.done(function(status) {
            });
        });
    }
}

addPostListeners();
addDeleteListeners();

let newdiv = document.createElement("div");
newdiv.innerHTML = "    <div class=\"userInfo\">\n" +
    "        <a class=\"but del\">\n" +
    "            <svg width=\"29\" height=\"29\" viewBox=\"0 0 29 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "                <g clip-path=\"url(#clip0)\">\n" +
    "                    <path d=\"M17.1568 14.5229L28.4489 3.23057C29.1837 2.49604 29.1837 1.30842 28.4489 0.573902C27.7144 -0.16062 26.5267 -0.16062 25.7922 0.573902L14.4998 11.8663L3.20781 0.573902C2.47295 -0.16062 1.28567 -0.16062 0.551149 0.573902C-0.183716 1.30842 -0.183716 2.49604 0.551149 3.23057L11.8432 14.5229L0.551149 25.8153C-0.183716 26.5498 -0.183716 27.7374 0.551149 28.472C0.917206 28.8384 1.39852 29.0224 1.87948 29.0224C2.36045 29.0224 2.84141 28.8384 3.20781 28.472L14.4998 17.1796L25.7922 28.472C26.1586 28.8384 26.6396 29.0224 27.1205 29.0224C27.6015 29.0224 28.0825 28.8384 28.4489 28.472C29.1837 27.7374 29.1837 26.5498 28.4489 25.8153L17.1568 14.5229Z\" fill=\"white\"/>\n" +
    "                </g>\n" +
    "                <defs>\n" +
    "                    <clipPath id=\"clip0\">\n" +
    "                        <rect width=\"29\" height=\"29\" fill=\"white\"/>\n" +
    "                    </clipPath>\n" +
    "                </defs>\n" +
    "            </svg>\n" +
    "\n" +
    "        </a>\n" +
    "        <div>\n" +
    "            <input type=\"text\" name=\"name\" maxlength=\"100\" class=\"form-control\" placeholder=\"Имя блока\">\n" +
    "            <textarea name=\"content\" cols=\"40\" rows=\"10\" class=\"form-control block_content\" content></textarea>\n" +
    "            <input name=\"block_id\" class=\"form-control block_id\" type=\"hidden\" value=\"-1\">\n" +
    "            <a class=\"but sav\">Сохранить изменения</a>\n" +
    "        </div>\n" +
    "    </div>";


var $block = $(newdiv).clone();

$('.add').click(function() {
    $(this).before($block.clone());

    addPostListeners();
    addDeleteListeners();

});
