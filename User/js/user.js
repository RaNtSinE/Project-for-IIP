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

let name;
let content;

for (
    var i = 0;
    i < document.getElementsByClassName("sav").length;
    i++
) {
    let j = i;
    document.getElementsByClassName("sav")
        [i].addEventListener("click", function() {
         name = this.parentNode.getElementsByClassName("form-control")[0].value;
        // alert(name);
        content = this.parentNode.getElementsByClassName("form-control")[1].value;
        // alert(content);
        $.ajax({
            type: "POST",
            url: "http://vegasaur.pythonanywhere.com/news",
            data: {if: j, name: name, content: content }
        });
    });
}

