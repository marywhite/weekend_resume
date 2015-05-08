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
    click_cat('.name', '.space');


    setInterval(function() {
        randomSlash('.hi');
        randomSlash('.footer');
    }, 5000);



    function randomSlash(str){
        $(str).children().removeClass('select');
        var children = ($(str).children(':visible').length);
        var child = randomNumber(0, children-1);
        $(str + " div:visible").eq(child).addClass('select');
    }

    function randomNumber(min, max) {
            return Math.floor(Math.random() * (1 + max - min) + min);
    }

    randomSlash();

//reset on click
//    setInterval(function() {
//        $('.slash').toggleClass('.change');
//    }, 800);

});


