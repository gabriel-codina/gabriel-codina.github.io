$(document).ready(function(){
    $(".fa-envelope-o").hover(function(){
        $(".emal").animate({
            height: '150px',
            width: '150px',
            opacity: '1'
        });
        $(".emal").show()
    
},function(){
     
        $(".emal").animate({
            height: '0px',
            width: '0px',
            opacity: '0'
        });
        $(".emal").hide()
}
                              );
});