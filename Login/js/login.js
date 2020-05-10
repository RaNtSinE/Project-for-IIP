 setInterval(function () {
            var dataReCaptcha = $("#g-recaptcha-response").val();
            capt = document.getElementsByClassName("g-recaptcha");
            if (dataReCaptcha != "" && dataReCaptcha != undefined) {
                setTimeout(function () {
                    capt[0].classList.add("almostHide");
                    setTimeout(function () {
                        capt[0].classList.add("hide");
                    }, 500)
                }, 100);
            }
            else
            {
                setTimeout(function () {
                    capt[0].classList.remove("hide");
                    setTimeout(function () {
                        capt[0].classList.remove("almostHide");
                    }, 10)
                }, 100);
            }
        }, 1000);


