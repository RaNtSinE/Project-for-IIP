    $('.nav-toggle').on('click',function()
  {
    $('#menu').toggleClass('activee');
    $('#menu').removeClass('active');
    $('#ham').removeClass('active');
  });

    $('.letter').on('click',function ()
    {
      $('#letterWindow').toggleClass('letterOpen');
    });

    $('#letterClose').on('click',function ()
    {
      $('#letterWindow').removeClass('letterOpen');
    });