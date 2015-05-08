var path = "/views/resume.html";

$(document).ready(function(){
    $(".prime").load(path + " .prime p");
    $(".macalester").load(path + " .macalester p");
    $(".hola").load(path + " .hola p");
    $(".teach").load(path + " .teach p");
    $(".research").load(path + " .research p");
    $(".if").load(path + " .if p");

    function click_cat (str1, str2) {
        $(str1).click(function(){
            $('.cat').parent().addClass('hidden');
            $(str2).removeClass('hidden');
        });
    }

    click_cat('.span1', '.school');
    click_cat('.span2', '.work');
    click_cat('.span3', '.other');

//reset on click
//    setInterval(function() {
//        $('.slash').toggleClass('.change');
//    }, 800);

});


