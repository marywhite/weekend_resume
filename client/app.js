//$.get('/views/resume.html', function(data){
//    //var mac = $('.mac', data);
//    //$('.macalester').append($(data).find(".mac"));
//    $('#prime').append(($(data).find('#mac').val()));
//});
//
$(document).ready(function(){
    $(".prime").load("/views/resume.html");
});
