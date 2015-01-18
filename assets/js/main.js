var baraja;

$('#nav-prev').on('click', function(event) {
    baraja.previous();
});

$('#nav-next').on('click', function(event) {
    baraja.next();
});

$('#beginButton').on('click',function(){
    $('#beginDiv').css('opacity','0');
    setTimeout(function(){
        $('#beginDiv').hide();
        $("body").removeClass("backImg").addClass("tapete");
        $('#baraja1').show();
        setTimeout(function(){
            baraja = $('#baraja-el').baraja();
            if ($('#sidebar > ul').is(":visible") === true) {
                $('#main-content').css({
                    'margin-left': '0px'
                });
                $('#sidebar').css({
                    'margin-left': '-210px'
                });
                $('#sidebar > ul').hide();
                $("#container").addClass("sidebar-closed");
             }
             baraja.fan( {
                speed : 500,
                easing : 'ease-out',
                range : 10,
                direction : 'right',
                origin : { x : 50, y : 2000 },
                center : true
            } );
            $('#baraja1').off();
            $('#baraja1').on('click',function(){
                $('#actions').css('display','inline-block');
            });
        },1000);
    },750);
});