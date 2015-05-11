var resumeData;
var template;

function getResume() {
    $.ajax({
        url: '/data',
        success: function(response) {
            resumeData = response.Resume;
            getTemplate();
        }
    });
}

//get template
function getTemplate(){
    $.ajax({
        url: '/template',
        success: function(res){
            template = res;
            addInfo();
            }
        });
    }

//module stuff
function getRandom () {
    $.getJSON( "/random", function( data ) {
    console.log(data);
    });
}
//get template and append resume data
function addInfo(){
    var item;
    var el;
    for (var i = 0; i < resumeData.length; i++) {
        $('.resume').append(template);
        item = resumeData[i];
        el = $('.resume').children().last();
        el.addClass(item.type);
        el.children('.name').html(item.name);
        el.children('.position').html(item.position);
        el.children('.description').html(item.description);
        if (i == 0){
            el.addClass('current');
        }
    }
}

$(document).ready(function(){

    getResume();
    getRandom();

    //hide resume info with name click
    $('.me').click(function(){
        $('.resume').children().addClass('hidden');
        $('.header').addClass('only');
    });

    //handlers for category clicks
    reveal('.span1', '.school');
    reveal('.span2', '.work');
    reveal('.span3', '.talk');


    // change color on document load
    changeColor();
    setInterval(changeColor, 5000);

    //change color on window resize
    $( window ).resize(function(){
        changeColor();
    });

    function reveal(str1, str2) {
        $(str1).click(function(){
            $('.header').removeClass('only');
            $('.resume').children().addClass('hidden');
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
