    $('.nav-toggle').on('click',function()
  {
    $('#menu').toggleClass('activee');
    $('#menu').removeClass('active');
    $('#ham').removeClass('active');
  });

    let open = 0;

    $('.letter').on('click',function ()
    {
      // $('#letterWindow').toggleClass('letterOpen');
      if(open === 0)
      {
        open = 1;
        $('#letterWindow').fadeIn(400);
      }
      else
      {
        open = 0;
        $('#letterWindow').fadeOut(400);
      }
    });

    $('#letterClose').on('click',function ()
    {
      // $('#letterWindow').removeClass('letterOpen');
      open = 0;
      $('#letterWindow').fadeOut(400);
    });