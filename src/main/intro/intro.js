$(document).ready(function(){
    console.log('main intro');

    var $section08Contents = $('.section08_contents');
    var $section08List = $section08Contents.children('div.list_area');
    var $section08ListItem = $section08List.find('li');
    

    $section08ListItem.on('click',function(e){

                if($(this).hasClass('on')){
                    $section08ListItem.removeClass('on');
                }else{
                    $section08ListItem.removeClass('on');
                    $(this).addClass('on');
                }
       
    });
    
})