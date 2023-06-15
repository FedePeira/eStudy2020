$(document).ready(function() {
    $('.traducir').on('click', function(e)
    {
        console.log("Se apreto")
        var str = $(".traducir").val();
        $('.traducido').html("<p>" + str + "<p/>");
    });
});