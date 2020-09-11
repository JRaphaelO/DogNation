
$('[name:"HeaderButton"]').click(function() {
    $('html, body').animate({
        scrollTop: $('[name:"Header"]').offset().top
    }, 2000);
});

$('[name:"IamButton"]').click(function() {
    $('html, body').animate({
        scrollTop: $('[name:"Iam"]').offset().top
    }, 2000);
});

$('[name:"DogsButton"]').click(function() {
    $('html, body').animate({
        scrollTop: $('[name:"Dogs"]').offset().top
    }, 2000);
});

$('[name="ContactsButton"]').click(function() {
        $('html, body').animate({
            scrollTop: $('[name="teste"]').offset().top
        }, 2000);
    });

$('button').click(function() {
    var thisButton = $(this).name;
    var section = thisButton.substring(0, thisButton.length - 6);

    $('html, body').animate({
        scrollTop: $('[name="' + section + '"]').offset().top
    }, 2000);
});