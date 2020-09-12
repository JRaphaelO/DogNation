$('#MenuBar .nav-item .nav-link').click(function(event) {
    event.preventDefault();
    var thisButton = $(this).attr('name');
    var section = thisButton.substring(0, thisButton.length - 6);
   // alert($('#' + section).offset().top);
   
    $('html, body').animate({
        scrollTop: $('#' + section).offset().top
    }, 2000);
});

// $('button').click(function() {
//     var thisButton = $(this).name;
//     var section = thisButton.substring(0, thisButton.length - 6);

//     $('html, body').animate({
//         scrollTop: $('#' + section).offset().top
//     }, 2000);
// });