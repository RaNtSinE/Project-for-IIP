    $('.nav-toggle').on('click',function()
  {
    $('#menu').toggleClass('activee');
    $('#menu').removeClass('active');
    $('#ham').removeClass('active');
  });

    let open = 0;

    $('.letter').on('click',function ()
    {
      if(open === 0)
      {
        open = 1;
        $('#letterGhost').addClass('almostOpen');
        setTimeout(function ()
        {
          $('#letterWindow').addClass('letterOpen');
        }, 10);
      }
      else
      {
        open = 0;
        $('#letterWindow').removeClass('letterOpen');
        setTimeout(function ()
        {
          $('#letterGhost').removeClass('almostOpen');
        }, 400);
      }


      // if(open === 0)
      // {
      //   open = 1;
      //   $('#letterWindow').fadeIn(400);
      // }
      // else
      // {
      //   open = 0;
      //   $('#letterWindow').fadeOut(400);
      // }
    });

    $('#letterClose').on('click',function ()
    {
      $('#letterWindow').removeClass('letterOpen');
      setTimeout(function ()
      {
        $('#letterGhost').removeClass('almostOpen');
      }, 400);
      // open = 0;
      // $('#letterWindow').fadeOut(400);
    });

    $('#letterSubmit').on('click',function () {
      let address = document.getElementById("letterAddress");
      let purpose = document.getElementsByClassName("select-selected");
      let content = document.getElementById("letterContent");
      let somePurpose;
      let success = 1;
      if(purpose[0].innerHTML === "Вопрос по продукту")
      {
        somePurpose = "question";
      }
      else if(purpose[0].innerHTML === "Предложение")
      {
        somePurpose = "offer";
      }
      else if(purpose[0].innerHTML === "Отзыв")
      {
        somePurpose = "comment";
      }
      else if(purpose[0].innerHTML === "Отклик на вакансию")
      {
        somePurpose = "jobResponse";
      }
      else if(purpose[0].innerHTML === "Жалоба")
      {
        somePurpose = "claim";
      }
      else
      {
        success = 0;
        $('#select-selected').addClass('wrong');
      }
      if(address.value === "")
      {
        success = 0;
        $('#letterAddress').addClass('wrong');

        address.placeholder = "Это поле должно быть заполнено";
      }
      if(content.value === "")
      {
        success = 0;
        $('#letterContent').addClass('wrong');

        content.placeholder = "Это поле должно быть заполнено";
      }
      var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
        if(address.value !== ""){
          if(address.value.search(pattern) != 0){
            $('#letterAddress').addClass('wrong');
            $('#message').addClass('wrong');
            success = 0;
        }
      }
      if(success === 1)
      {
        $.ajax({
          type: "POST",
          url: "http://vegasaur.pythonanywhere.com/test_mail",
          data: {purpose: somePurpose, address: address.value, content: content.value }
        }).done(function(data){
          // alert(JSON.stringify(data));
        });
      }
    });

    $('#letterAddress').on("input", function () {
      let address = document.getElementById("letterAddress");
      $('#letterAddress').removeClass('wrong');
      $('#message').removeClass('wrong');

      address.placeholder = "Ваш почтовый адрес";
    });

    $('#letterContent').on("input", function () {
      let content = document.getElementById("letterContent");
      $('#letterContent').removeClass('wrong');

      content.placeholder = "Ваш почтовый адрес";
    });
