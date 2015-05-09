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

//append templates to index
function getTemplate(){
    $.ajax({
        url: '/template',
        success: function(res){
            template = res;
            addInfo();
            }
        });
    }

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
    }
}

$(document).ready(function(){
    $('.span1').click(check);

});

function check(){
    if (!resumeData){
        getResume();
        (console.log('this'));
    } else if (!template) {
        addTemplate();
        console.log('no that');
    } else {
        addInfo();
        console.log('nahhh');
    }
}