// individuiamo l'elemento da cliccare per visualizzare il menu hamburger
$('.header-right > a').click(
    function(){
        $('.hamburger-menu').show();
)
};

// individuiamo l'elemento da cliccare per nascondere il menu hamburger
$('.close').click(
    function(){
        $('.hamburger-menu').hide();
    }
);
