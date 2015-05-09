var resumeData;
var template;

//get data
$.ajax({
    url: '/data',
    success: function(response) {
        resumeData = response.Resume;
        addTemplate();
    }
});

//response.Resume.forEach(function(){
//});

//append templates to index
function addTemplate(){
    var item;
    var el;
    $.ajax({
        url: '/template',
        success: function(res){
            template = res;
            for (var i = 0; i < resumeData.length; i++){
                $('.resume').append(template);
                item = resumeData[i];
                el = $('.resume').children().last();
                el.addClass(item.type);
                el.children('.name').html(item.name);
            }
        }
    });
}


$(document).ready(function(){

});

