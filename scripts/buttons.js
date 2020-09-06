
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