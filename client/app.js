var path = "/views/resume.html";

$(document).ready(function(){
//load resume items into index.html
    $(".prime").load(path + " .prime p");
    $(".macalester").load(path + " .macalester p");
    $(".hola").load(path + " .hola p");
    $(".teach").load(path + " .teach p");
    $(".research").load(path + " .research p");
    $(".if").load(path + " .if p");
    $(".about").load(path + " .about p");

    //hides resume content with name click
    $('.name').click(function(){
        $('.cat').parent().addClass('hidden');
        $('.header').addClass('only');
    });

    //display info for school, work, talk
    click_cat('.span1', '.school');
    click_cat('.span2', '.work');
    click_cat('.span3', '.talk');

    // change color on document load
    changeColor();
    setInterval(changeColor, 5000);

    //change color on window resize
    $( window ).resize(function(){
        changeColor();
    });

    //generate on click functions to show different resume sections
    function click_cat (str1, str2) {
        $(str1).click(function(){
            $('.header').removeClass('only');
            $('.cat').parent().addClass('hidden');
            $(str2).removeClass('hidden');
        });
    }

    //change color for all slash rows
    function changeColor(){
        randomSlash('.hi');
        randomSlash('.footer');
    }

    //change color for a random visible child of a class
    function randomSlash(str){
        $(str).children().removeClass('select');
        var children = ($(str).children(':visible').length);
        var child = randomNumber(0, children-1);
        $(str + " div:visible").eq(child).addClass('select');

    }

    //generate random number
    function randomNumber(min, max) {
            return Math.floor(Math.random() * (1 + max - min) + min);
    }

});


