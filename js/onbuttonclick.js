let procedi = $('#procedi'),
    oldData = "";
procedi.click(function() {
    $('body').attr("class","dopo");
    $('hr').attr("class","dopo");
    oldData = $('#input').val();
    $('textarea').attr("class","jsboxout");
    $('textarea').attr("id", "output");
    $('.pesce').removeClass("left");
    $('.pesce').addClass("right");
});

let indietro = $('#indietro');
indietro.click(function() {
    $('body').attr("class","prima");
    $('hr').attr("class","prima");
    $('#output').val(oldData);
    $('textarea').attr("class","jsboxin");
    $('textarea').attr("id", "input");
    $('.pesce').removeClass("right");
    $('.pesce').addClass("left");
});
